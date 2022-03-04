import { Bson } from "../../../deps.ts";
import { db } from "../db/mongo.ts";

// Schema for AYTO participants
interface ParticipantSchema {
  _id: Bson.ObjectId;
  name: string;
  gender: string;
  age: number;
  picture: string;
  season: number;
}

const Participant = db.collection<ParticipantSchema>("participant");
export { Participant };
