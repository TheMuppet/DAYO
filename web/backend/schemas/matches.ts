import { Bson } from "../../../deps/web/deps.ts";
import { db } from "../db/mongo.ts";

// Schema for AYTO participants
interface MatchesSchema {
  _id: Bson.ObjectId;
  matches: {
    man: {
      name: string;
      pic: string;
    };
    woman: {
      name: string;
      pic: string;
    };
    probability: number;
  };
}

const Matches = db.collection<MatchesSchema>("matches");
export { Matches };
