import {
  ApplicationCommandInteraction,
  command,
  CommandClient,
  CommandContext,
  config,
  event,
  Intents,
  slash,
} from "../deps/discord/deps.ts";
import { commands } from "./commands/commands.ts";
import { db } from "../web/backend/db/mongo.ts";
import { placeBet } from "./commands/placeBet.ts";
import { showBet } from "./commands/showBet.ts";
import { showMatches } from "./commands/matches.ts";

const env = config();
const token = Deno.env.get("BOT_TOKEN") || env.BOT_TOKEN;

class DAYO extends CommandClient {
  constructor() {
    super({
      prefix: "!",
      caseSensitive: false,
    });
  }

  @event()
  async ready(): Promise<void> {
    await db;
    const currentCommands = await this.interactions.commands.all();
    if (currentCommands.size != commands.length) {
      this.interactions.commands.bulkEdit(commands);
    }
  }

  @slash("bet")
  async betCommand(i: ApplicationCommandInteraction): Promise<void> {
    await placeBet(i);
  }

  @slash("showbet")
  async mybetCommand(i: ApplicationCommandInteraction): Promise<void> {
    await showBet(i);
  }

  @command({ aliases: "matches" })
  async matches(ctx: CommandContext): Promise<void> {
    const msg = await showMatches();
    ctx.message.reply(msg);
  }
}

const bot = new DAYO();
bot.connect(token, Intents.None);
