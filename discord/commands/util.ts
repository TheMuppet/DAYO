import { ApplicationCommandOptionType } from "https://deno.land/x/harmony@v2.6.0/src/types/applicationCommand.ts";
import { ApplicationCommandInteraction } from "https://deno.land/x/harmony@v2.6.0/src/structures/applicationCommand.ts";
import { FindCursor } from "https://deno.land/x/mongo@v0.29.1/src/collection/commands/find.ts";
import { Admin, AdminSchema } from "../../web/backend/db/schemas/admin.ts";

export interface Option {
  name: string;
  description: string;
  required: boolean;
  type: ApplicationCommandOptionType;
}

export async function getAdminIds(): Promise<Array<string>> {
  const admins: FindCursor<AdminSchema> = await Admin.find();
  const adminDocuments: Array<AdminSchema> = await admins.toArray().then(
    function (obj) {
      return obj;
    },
  );
  const adminIds: Array<string> = new Array(adminDocuments.length - 1);
  adminDocuments.forEach(function (obj) {
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

export function shuffle(array: Array<>) {
  let currentIndex: number = array.length, randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}
