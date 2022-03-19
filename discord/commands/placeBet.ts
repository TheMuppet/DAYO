import {
  ApplicationCommandInteraction,
  ApplicationCommandPartial,
} from "../../deps/discord/deps.ts";
import { Bets, BetsSchema } from "../../web/backend/db/schemas/bets.ts";
import { createOptions, extractMatches } from "./util.ts";

export const placeBetCmd: ApplicationCommandPartial = {
  name: "bet",
  description: "Place your bet",
  options: createOptions("match", "Write Man.Woman:", true, 10),
};

export async function placeBet(
  i: ApplicationCommandInteraction,
): Promise<ApplicationCommandInteraction> {
  const bet: BetsSchema | undefined = await Bets.findOne({ userID: i.user.id });
  if (bet) {
    return i.respond({
      content: "You already have placed a bet for this season.",
    });
  }
  const matches: Array<Array<string>> = extractMatches(i, "match");
  await Bets.insertOne({
    userID: i.user.id,
    matches: matches,
  });
  return i.respond({ content: "You submitted your bet successfully!" });
}
