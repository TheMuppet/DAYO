import { Bson } from "../../../../deps/web/deps.ts";
import { db } from "../mongo.ts";

export interface BetsSchema {
  _id: Bson.ObjectId;
  userID: string;
  matches: Array<Array<string>>;
}
export const Bets = db.collection<BetsSchema>("bets");
