import {
  ApplicationCommandInteraction,
  SlashCommandOptionType,
} from "../../deps/discord/deps.ts";
import { Bets } from "../../web/backend/db/mongo.ts";

export interface Option {
  name: string;
  description: string;
  required: boolean;
  type: SlashCommandOptionType;
}

export function createOptions(): Array<Option> {
  const options: Array<Option> = new Array(10);
  for (let i = 0; i < options.length; i++) {
    options[i] = {
      name: `match${i + 1}`,
      description: "Write: Man.Woman",
      required: true,
      type: SlashCommandOptionType.STRING,
    };
  }
  return options;
}

export const placeBetCmd = {
  name: "bet",
  description: "Place your bet",
  options: createOptions(),
};

export async function placeBet(
  i: ApplicationCommandInteraction,
): Promise<void> {
  const bet = await Bets.findOne({ userID: i.user.id });
  if (bet) {
    i.respond({
      content: "You already have placed a bet for this season.",
    });
  }
  const matches = new Array(10);
  for (let index = 0; index < matches.length; index++) {
    const input: string = i.options.find((e) => e.name == `match${index + 1}`)
      ?.value as string;
    matches[index] = input.match(/\w+/g) ?? [];
  }
  await Bets.insertOne({
    userID: i.user.id,
    matches: matches,
  });
  i.respond({ content: "You submitted your bet successfully" });
}
