import {
  ApplicationCommandInteraction,
  ApplicationCommandPartial,
} from "../../deps/discord/deps.ts";
import { BetsSchema } from "../../backend/db/schemas/bets.ts";
import { checkInputMatches, createOptions, extractMatches } from "./util.ts";
import { db } from "../../backend/db/mongo.ts";

export const placeBetCmd: ApplicationCommandPartial = {
  name: "bet",
  description: "Place your bet",
  options: createOptions("match", "Write Man.Woman:", true, 10),
};

export async function placeBet(
  i: ApplicationCommandInteraction,
): Promise<ApplicationCommandInteraction> {
  const bet: BetsSchema | undefined = await db.findOne("bets", {
    userID: i.user.id,
  });

  if (bet) {
    return i.respond({
      content: "You already have placed a bet for this season.",
    });
  }
  const matches: Array<Array<string>> = extractMatches(i, "match");
  const [check, msg]: [boolean, string] = await checkInputMatches(matches);

  if (check) {
    await db.insertOne<BetsSchema>("bets", {
      userID: i.user.id,
      matches: matches,
    });
    return i.respond({ content: "You submitted your bet successfully!" });
  } else {
    return i.respond({ content: msg });
  }
}
