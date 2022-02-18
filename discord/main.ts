import { config } from "../deps.ts";
import { Client, event, Intents, slash } from "../deps.ts";
import { commands } from "./commands/commands.ts";
import { Interaction } from "https://deno.land/x/harmony@v2.5.1/src/structures/interactions.ts";

const env = config();

const token = env.BOT_TOKEN;
const serverID = env.SERVER_ID

class TagBot extends Client {
  @event()
  ready() {
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
    i.respond({ content: "You submitted your bet successfully" });
  }
}

const bot = new TagBot();

bot.connect(token, Intents.None);
