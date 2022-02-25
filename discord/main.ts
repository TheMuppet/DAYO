import {
  ApplicationCommandInteraction,
  Client,
  config,
  event,
  Intents,
  slash,
} from "../deps/discord/deps.ts";
import { commands } from "./commands/commands.ts";
import { db } from "../web/backend/db/mongo.ts";
import { addBet, getBet } from "../web/backend/controller/bets.ts";

const env = config();
const token = env.BOT_TOKEN;
const serverID = env.SERVER_ID;

class TagBot extends Client {
  @event()
  async ready() {
    await db;
    console.log("Ready!");
    console.log(commands);
    commands.forEach((command) => {
      this.slash.commands.create(command, serverID)
        .then((cmd) => console.log(`Created Slash Command ${cmd.name}!`))
        .catch((cmd) => console.log(`Failed to create ${cmd.name} command!`));
    });
  }
  @slash("bet")
  async betCommand(i: ApplicationCommandInteraction) {
    const bet = await getBet(i.user.id);
    if (bet) {
      return i.respond({
        content: "You already have placed a bet for this season.",
      });
    }

    const matches = new Array(10);
    for (let index = 0; index < matches.length; index++) {
      const input: string = i.options.find((e) => e.name == `match${index + 1}`)
        ?.value as string;
      matches[index] = input.match(/\w+/g) ?? [];
    }
    await addBet(i.user.id, matches);
    i.respond({ content: "You submitted your bet successfully" });
  }
}

const bot = new TagBot();

bot.connect(token, Intents.None);
