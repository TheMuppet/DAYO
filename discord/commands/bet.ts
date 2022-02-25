import { SlashCommandOptionType } from "../../deps.ts";

export interface Option {
  name: string;
  description: string;
  required: boolean;
  type: SlashCommandOptionType;
}

export function createOptions() {
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

export const bet = {
  name: "bet",
  description: "Place your bet",
  options: createOptions(),
};
