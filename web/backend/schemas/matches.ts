import { Bson } from "../../../deps/web/deps.ts";
import { db } from "../db/mongo.ts";

// Schema for AYTO matches
interface MatchesSchema {
  _id: Bson.ObjectId;
  matches: {
    man: {
      id_m: Bson.ObjectId;
      name: string;
      pic: string;
    };
    woman: {
      id_w: Bson.ObjectId;
      name: string;
      pic: string;
    };
    probability: number;
  };
  // nur Idee erstmal
  season: number;
  episode: number;
}

const Matches = db.collection<MatchesSchema>("matches");
export { Matches };
