import {
  ApplicationCommandInteraction,
  ApplicationCommandOptionType,
} from "../../deps/discord/deps.ts";
import { AdminSchema } from "../../web/backend/db/schemas/admin.ts";
import {
  Participant,
  ParticipantSchema,
} from "../../web/backend/db/schemas/participant.ts";

export interface Option {
  name: string;
  description: string;
  required: boolean;
  type: ApplicationCommandOptionType;
}

export function getAdminIds(admins: Array<AdminSchema>): Array<string> {
  const adminIds: Array<string> = [];

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

    // @ts-ignore: Object is possibly 'null'.
    const regexMatches = input.match(/(\w+).(\w+)/);
    if (regexMatches != null) {
      matches[index] = regexMatches.slice(1);
    } else {
      matches[index] = ["", ""];
    }
  }
  return matches;
}

export async function checkInputMatches(
  matches: Array<Array<string>>,
): Promise<[boolean, string]> {
  const participants: Array<ParticipantSchema> = await Participant.find()
    .toArray().then(
      function (participants: Array<ParticipantSchema>) {
        return participants;
      },
    );

  const participantsManNames: Array<string> = [];
  const participantsWomanNames: Array<string> = [];

  participants.forEach(function (participant: ParticipantSchema) {
    if (participant.gender === "m") {
      participantsManNames.push(participant.name);
    } else {
      participantsWomanNames.push(participant.name);
    }
  });

  for (let i = 0; i < matches.length; i++) {
    if (!participantsManNames.includes(matches[i][0])) {
      return [
        false,
        `Sorry, ${matches[i][0]} is not a male participant of this season`,
      ];
    }
    if (!participantsWomanNames.includes(matches[i][1])) {
      return [
        false,
        `Sorry, ${matches[i][1]} is not a female participant of this season`,
      ];
    }
  }
  return [true, ""];
}
