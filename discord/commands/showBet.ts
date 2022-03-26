import { BetsSchema } from "../../backend/db/schemas/bets.ts";
import {
  ApplicationCommandInteraction,
  ApplicationCommandPartial,
} from "../../deps/discord/deps.ts";
import { db } from "../../backend/db/mongo.ts";

export const showBetCmd: ApplicationCommandPartial = {
  name: "showbet",
  description: "Shows you your bet",
};

function matchesToString(bet: BetsSchema): string {
  let msg = "";
  for (let i = 0; i < bet.matches.length; i++) {
    msg += `Match ${i + 1}: ${bet.matches[i][0]} ❤️ ${bet.matches[i][1]}\n`;
  }
  return msg;
}

export async function showBet(
  i: ApplicationCommandInteraction,
): Promise<ApplicationCommandInteraction> {
  const bet: BetsSchema | undefined = await db.findOne("bets", {
    userID: i.user.id,
  });
  if (bet) {
    return i.respond({
      content: "Your bet:\n" + matchesToString(bet),
    });
  } else {
    return i.respond({
      content:
        "You have not placed a bet for this season. You can place a bet with the /bet command!",
    });
  }
}
