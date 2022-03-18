import { Bets, BetsSchema } from "../../web/backend/db/schemas.ts";
import {
  ApplicationCommandInteraction,
  ApplicationCommandPartial,
} from "../../deps/discord/deps.ts";

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
  const bet: BetsSchema | undefined = await Bets.findOne({ userID: i.user.id });
  if (bet) {
    return i.respond({
      content: "Your bet:\n" + matchesToString(bet),
    });
  }
  return i.respond({
    content:
      "You have not placed a bet for this season. You can place a bet with the /bet command!",
  });
}
