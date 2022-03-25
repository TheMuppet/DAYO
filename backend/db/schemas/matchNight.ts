import { Bson } from "../../../deps/web/deps.ts";
import { db } from "../mongo.ts";

// Schema for AYTO match box results
export interface MatchNightSchema {
  _id: Bson.ObjectId;
  couples: [{
    man: string;
    woman: string;
  }];
  lights: number;
  season: number;
  episode: number;
}

export const MatchNight = db.collection<MatchNightSchema>("matchnight");
