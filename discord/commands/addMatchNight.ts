import {
  ApplicationCommandInteraction,
  ApplicationCommandOptionType,
  ApplicationCommandPartial,
} from "../../deps/discord/deps.ts";
import {
  checkInputMatches,
  createOptions,
  extractMatches,
  Option,
} from "./util.ts";
import { MatchNightSchema } from "../../backend/db/schemas/matchNight.ts";
import { db } from "../../backend/db/mongo.ts";

const matchNightOpt: Array<Option> = [
  {
    name: "lights",
    description: "Add number of lights that turned on:",
    required: true,
    type: ApplicationCommandOptionType.INTEGER,
  },
  {
    name: "episode",
    description: "Add number of episode:",
    required: true,
    type: ApplicationCommandOptionType.INTEGER,
  },
  {
    name: "season",
    description: "Add number of season:",
    required: true,
    type: ApplicationCommandOptionType.INTEGER,
  },
];

export const addMatchNightCmd: ApplicationCommandPartial = {
  name: "add-match-night",
  description: "Add new match-night information",
  options: matchNightOpt.concat(createOptions(
    "couple",
    "Write Man.Woman:",
    true,
    10,
  )),
};

export async function addMatchNight(
  i: ApplicationCommandInteraction,
): Promise<ApplicationCommandInteraction> {
  const rawCouples: Array<Array<string>> = extractMatches(i, "couple");
  const [check, msg]: [boolean, string] = await checkInputMatches(rawCouples);

  if (!check) {
    return i.respond({ content: msg });
  }

  const cleanCouples: MatchNightSchema["couples"] = [{
    man: rawCouples[0][0],
    woman: rawCouples[0][1],
  }];

  for (let i = 1; i < 10; i++) {
    cleanCouples[i] = { man: rawCouples[i][0], woman: rawCouples[i][1] };
  }

  await db.insertOne<MatchNightSchema>("matchnight", {
    couples: cleanCouples,
    lights: i.options.find((e) => e.name == "lights")
      ?.value as number,
    season: i.options.find((e) => e.name == "season")
      ?.value as number,
    episode: i.options.find((e) => e.name == "episode")
      ?.value as number,
  });
  return i.respond({ content: "Successful" });
}
