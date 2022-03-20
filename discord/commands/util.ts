import {
  ApplicationCommandInteraction,
  ApplicationCommandOptionType,
} from "../../deps/discord/deps.ts";
import { AdminSchema } from "../../web/backend/db/schemas/admin.ts";

export interface Option {
  name: string;
  description: string;
  required: boolean;
  type: ApplicationCommandOptionType;
}

export function getAdminIds(admins: Array<AdminSchema>): Array<string> {
  const adminIds: Array<string>= [];
  admins.forEach(function (obj) {
    adminIds.push(obj.discordId);
  });
  return adminIds;
}

export function createOptions(
  name: string,
  description: string,
  required: boolean,
  amount: number,
): Array<Option> {
  const options: Array<Option> = new Array(amount);
  for (let i = 0; i < options.length; i++) {
    options[i] = {
      name: `${name}-${i + 1}`,
      description: `${description}`,
      required: required,
      type: ApplicationCommandOptionType.STRING,
    };
  }
  return options;
}

export function extractMatches(
  i: ApplicationCommandInteraction,
  name: string,
): Array<Array<string>> {
  const matches = new Array<Array<string>>(10);
  for (let index = 0; index < matches.length; index++) {
    const input: string = i.options.find((e) =>
      e.name == `${name}-${index + 1}`
    )
      ?.value as string;
    matches[index] = input.match(/\w+/g) ?? [];
  }
  return matches;
}
