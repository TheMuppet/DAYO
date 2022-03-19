import { ApplicationCommandPartial } from "../../deps/discord/deps.ts";
import { placeBetCmd } from "./placeBet.ts";
import { showBetCmd } from "./showBet.ts";
import { addMatchNightCmd } from "./addMatchNight.ts";
import { addMatchBoxCmd } from "./addMatchBox.ts";

export const commands: Array<ApplicationCommandPartial> = [
  placeBetCmd,
  showBetCmd,
  addMatchNightCmd,
  addMatchBoxCmd,
];
