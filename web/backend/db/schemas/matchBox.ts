import { Bson } from "../../../../deps/web/deps.ts";
import { db } from "../mongo.ts";

// Schema for AYTO match box results
interface MatchBoxSchema {
  _id: Bson.ObjectId;
  name_m: string;
  name_w: string;
  match: boolean;
  season: number;
  mb_number: number;
}

export const Matchbox = db.collection<MatchBoxSchema>("matchbox");
