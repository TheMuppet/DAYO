import { Bson } from "../../../deps/web/deps.ts";
import { db } from "../db/mongo.ts";

// Schema for AYTO match box results
interface MatchBoxSchema {
  _id: Bson.ObjectId;
  name_m: string;
  name_w: string;
  match: boolean;
  season: number;
  number: number;
}

const Matchbox = db.collection<MatchBoxSchema>("matchbox");
export { Matchbox };
