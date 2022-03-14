import { ApplicationCommandPartial } from "../../deps/discord/deps.ts";
import { placeBetCmd } from "./placeBet.ts";
import { showBetCmd } from "./showBet.ts";

export const commands: ApplicationCommandPartial[] = [placeBetCmd, showBetCmd];
