import { Bson } from "../../../../deps/web/deps.ts";
import { db } from "../mongo.ts";

// Schema for AYTO match box results
export interface MatchBoxSchema {
  _id: Bson.ObjectId;
  man: string;
  woman: string;
  match: boolean;
  season: number;
  episode: number;
}

export const MatchBox = db.collection<MatchBoxSchema>("matchbox");
