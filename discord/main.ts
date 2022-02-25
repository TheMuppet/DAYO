import { config } from "../deps.ts";
import { Client, event, Intents, slash } from "../deps.ts";
import { commands } from "./commands/commands.ts";
import { Interaction } from "https://deno.land/x/harmony@v2.5.1/src/structures/interactions.ts";
import { db } from "../web/backend/db/mongo.ts";
import { getBet, addBet } from "../web/backend/controller/bets.ts"

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
  betCommand(i: Interaction) {
    const bet = getBet(i.user.id);
    if (bet) {
      return i.respond({
        content: "You already have placed a bet for this season.",
      });
    }

    const matches: Array<string> = new Array(10);
    for (let index = 0; index < matches.length; index++) {
      matches[index] = i.options.find((e) => e.name == `match${index + 1}`)
        ?.value as string;
    }

    addBet(i.user.id, matches);

    i.respond({ content: "You submitted your bet successfully" });
  }
}

const bot = new TagBot();

bot.connect(token, Intents.None);
