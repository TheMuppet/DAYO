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
import { createEmbed, shuffleParticipants } from "./util.ts";

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
  participants = shuffleParticipants(participants);
  let embed: Embed = createEmbed(new Embed(), participants[0]);
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
          const nextParticipant = participants[game.hot + game.not + 1];
          if (game.hot + game.not === participants.length - 1) {
            embed.files.pop();
            embed.setDescription(
              `Thanks for playing ❤\n` +
                `Hot: ${game.hot}\n` + `Not: ${game.not}\n`,
            );
            game.msg.edit({ embed, components: [] });
          } else if (choice === "Hot") {
            game.hot++;
            embed = createEmbed(embed, nextParticipant);
            game.msg.edit({ embed });
          } else if (choice === "Not") {
            game.not++;
            embed = createEmbed(embed, nextParticipant);
            game.msg.edit({ embed });
          }
        }
      }
    }
  });
}
