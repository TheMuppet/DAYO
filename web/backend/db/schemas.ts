import { Bson } from "../../../deps/web/deps.ts";
import { db } from "./mongo.ts";

// Schema for testing
export interface UserSchema {
  _id: { $oid: string };
  name: string;
  email: string;
  phone: string;
}

export interface BetsSchema {
  _id: Bson.ObjectId;
  userID: string;
  matches: Array<Array<string>>;
}

const User = db.collection<UserSchema>("user");
const Bets = db.collection<BetsSchema>("bets");

export { Bets, db, User };
