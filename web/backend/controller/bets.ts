import { Bets } from "../db/mongo.ts";

export async function getBet(userID: string) {
  return await Bets.findOne({ userID: userID });
}

export async function addBet(user: string, matches: Array<Array<string>>) {
  await Bets.insertOne({
    userID: user,
    matches: matches,
  });
}
