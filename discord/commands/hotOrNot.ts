import {
  ButtonStyle,
  CommandContext,
  Embed,
  isMessageComponentInteraction,
  Message,
  MessageComponentData,
  MessageComponentInteraction,
  MessageComponentType,
} from "../../deps/discord/deps.ts";
import { ParticipantSchema } from "../../web/backend/db/schemas/participant.ts";
import { bot } from "../main.ts";
import { shuffle } from "./util.ts";

const games = new Map<
  string,
  { hot: number; not: number; msg: Message; txt: string }
>();

const components: MessageComponentData[] = [
  {
    type: MessageComponentType.Button,
    style: ButtonStyle.SUCCESS,
    label: "Hot!",
    customID: "rps::Hot",
  },
  {
    type: MessageComponentType.Button,
    style: ButtonStyle.DESTRUCTIVE,
    label: "Not!",
    customID: "rps::Not",
  },
];

export function hotOrNot(
  ctx: CommandContext,
  participants: ParticipantSchema[],
) {
  participants = shuffle(participants);

  const embed = new Embed().setTitle("Hot or Not?").setType("rich")
    .setDescription(
      `Name: ${participants[0].name}\n` +
        `Age: ${participants[0].age}\n` + `Season: ${participants[0].season}\n`,
    );

  ctx.message.reply(
    {
      embed,
      components: [
        {
          type: MessageComponentType.ActionRow,
          components: components,
        },
      ],
    },
  ).then((msg) => {
    games.set(ctx.author.id, {
      hot: 0,
      not: 0,
      msg,
      txt: "Hot or Not",
    });
  });
  bot.on("interactionCreate", (i) => {
    if (isMessageComponentInteraction(i) === true) {
      const d = i as MessageComponentInteraction;

      if (d.user.id === ctx.author.id) {
        const game = games.get(d.user.id);
        if (d.customID.startsWith("rps::") === true && game) {
          const choice = d.customID.split("::")[1];
          if (game.hot + game.not === participants.length - 1) {
            embed.setDescription(
              `Thanks for playing ❤\n` +
                `Hot: ${game.hot}\n` + `Not: ${game.not}\n`,
            );
            game.msg.edit({ embed, components: [] });
          } else if (choice === "Hot") {
            game.hot++;
            embed.setDescription(
              `Name: ${participants[game.hot + game.not].name}\n` +
                `Age: ${participants[game.hot + game.not].age}\n` +
                `Season: ${participants[game.hot + game.not].season}\n`,
            );
            game.msg.edit({ embed });
          } else if (choice === "Not") {
            game.not++;
            embed.setDescription(
              `Name: ${participants[game.hot + game.not].name}\n` +
                `Age: ${participants[game.hot + game.not].age}\n` +
                `Season: ${participants[game.hot + game.not].season}\n`,
            );
            game.msg.edit({ embed });
          }
        }
      }
    }
  });
}
