import { Bson } from "../../../../deps/web/deps.ts";
import { db } from "../mongo.ts";

// Schema for AYTO match box results
interface MatchNightSchema {
  _id: Bson.ObjectId;
  couples: {
    name_m: string;
    name_w: string;
  };
  lights: number;
  season: number;
  mn_number: number;
}

export const Matchnight = db.collection<MatchNightSchema>("matchnight");
