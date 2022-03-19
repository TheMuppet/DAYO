import {
  ApplicationCommandInteraction,
  ApplicationCommandOptionType,
  ApplicationCommandPartial,
} from "../../deps/discord/deps.ts";
import { Option } from "./util.ts";
import { MatchBox } from "../../web/backend/db/schemas/matchBox.ts";

const matchBoxOpt: Array<Option> = [
  {
    name: "man",
    description: "Name of the man:",
    required: true,
    type: ApplicationCommandOptionType.STRING,
  },
  {
    name: "woman",
    description: "Name of the woman:",
    required: true,
    type: ApplicationCommandOptionType.STRING,
  },
  {
    name: "match",
    description: "Are they a match?",
    required: true,
    type: ApplicationCommandOptionType.BOOLEAN,
  },
  {
    name: "season",
    description: "Add number of season:",
    required: true,
    type: ApplicationCommandOptionType.NUMBER,
  },
  {
    name: "episode",
    description: "Add number of episode:",
    required: true,
    type: ApplicationCommandOptionType.NUMBER,
  },
];

export const addMatchBoxCmd: ApplicationCommandPartial = {
  name: "add-match-box",
  description: "Add new match-night information",
  options: matchBoxOpt,
};

export async function addMatchBox(
  i: ApplicationCommandInteraction,
): Promise<ApplicationCommandInteraction> {
  await MatchBox.insertOne({
    man: i.options.find((e) => e.name == "man")
      ?.value as string,
    woman: i.options.find((e) => e.name == "woman")
      ?.value as string,
    match: i.options.find((e) => e.name == "match")
      ?.value as boolean,
    season: i.options.find((e) => e.name == "season")
      ?.value as number,
    episode: i.options.find((e) => e.name == "episode")
      ?.value as number,
  });
  return i.respond({ content: "Successful" });
}
