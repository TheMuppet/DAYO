import { SlashCommandOptionType } from "../../deps.ts";

function createOptions() {
  const options = new Array(10);
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
