import {
  ApplicationCommandInteraction,
  Client,
  config,
  event,
  GatewayIntents,
  slash,
} from "../deps/discord/deps.ts";
import { commands } from "./commands/commands.ts";
import { db } from "../web/backend/db/mongo.ts";
import { placeBet } from "./commands/placeBet.ts";
import { showBet } from "./commands/showBet.ts";

const env = config();
const token = Deno.env.get("BOT_TOKEN") || env.BOT_TOKEN;

class DAYO extends Client {
  @event()
  async ready(): Promise<void> {
    await db;
    this.slash.commands.bulkEdit(commands)
  }

  @slash("bet")
  async betCommand(i: ApplicationCommandInteraction): Promise<void> {
    await placeBet(i);
  }

  @slash("showbet")
  async mybetCommand(i: ApplicationCommandInteraction): Promise<void> {
    await showBet(i);
  }
}

const bot = new DAYO();
bot.connect(token, [
  GatewayIntents.DIRECT_MESSAGES,
  GatewayIntents.GUILDS,
  GatewayIntents.GUILD_MESSAGES,
]);
