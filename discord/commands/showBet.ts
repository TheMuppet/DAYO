import { Bets, BetsSchema } from "../../web/backend/db/mongo.ts";
import { ApplicationCommandInteraction } from "../../deps/discord/deps.ts";

export const showBetCmd = {
  name: "showbet",
  description: "Shows you your bet",
  options: [],
};

function matchesToString(bet: BetsSchema): string {
  console.log("hey");
  let msg = "";
  for (let i = 0; i < bet.matches.length; i++) {
    msg = msg +
      `Match ${i + 1}: ${bet.matches[i][0]} ❤️ ${bet.matches[i][1]}\n`;
    console.log(msg);
  }
  return msg;
}

export async function showBet(i: ApplicationCommandInteraction): Promise<void> {
  const bet: BetsSchema | undefined = await Bets.findOne({ userID: i.user.id });
  if (bet) {
    i.respond({
      content: matchesToString(bet),
    });
  }
  i.respond({
    content:
      "You have not yet placed a bet for this season. You can place a bet with the /bet" +
      " command!",
  });
}
