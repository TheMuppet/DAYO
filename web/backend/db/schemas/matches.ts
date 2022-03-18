import { Bson } from "../../../../deps/web/deps.ts";
import { db } from "../mongo.ts";

// Schema for AYTO matches
export interface MatchesSchema {
  _id: Bson.ObjectId;
  matches: [{
    man: string;
    woman: string;
    probability: number;
  }];
  season: number;
  episode: number;
}

export const Matches = db.collection<MatchesSchema>("matches");
