import { Admin, AdminSchema } from "../../web/backend/db/schemas/admin.ts";
import { ParticipantSchema } from "../../web/backend/db/schemas/participant.ts";
import {
  ApplicationCommandInteraction,
  ApplicationCommandOptionType,
  decode,
  Embed,
  FindCursor,
  MessageAttachment,
} from "../../deps/discord/deps.ts";

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

export function shuffleParticipants(
  array: ParticipantSchema[],
): ParticipantSchema[] {
  let currentIndex: number = array.length;
  let randomIndex = 0;

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

export function getImage(participant: ParticipantSchema): MessageAttachment {
  const image = decode(participant.img.split(",").slice(1).join(","));
  return new MessageAttachment(`image${participant.name}.jpeg`, image);
}

export function createEmbed(
  embed: Embed,
  participant: ParticipantSchema,
): Embed {
  embed.files.pop();
  embed.setTitle("Hot or Not?").setType("rich")
    .setDescription(
      `Name: ${participant.name}\n` +
        `Age: ${participant.age}\n` + `Season: ${participant.season}\n`,
    ).attach(getImage(participant)).setImage(
      "attachment://image" + participant.name + ".jpeg",
    );
  if (participant.gender === "w") {
    embed.setColor("#ffacbd");
  } else {
    embed.setColor("#b8daef");
  }
  return embed;
}
