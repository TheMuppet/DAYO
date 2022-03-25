import { Bson } from "../../../deps/web/deps.ts";
import { db } from "../mongo.ts";

// Schema for AYTO participants
export interface ParticipantSchema {
  _id: Bson.ObjectId;
  name: string;
  gender: string;
  age: number;
  img: string;
  season: number;
}

export const Participant = db.collection<ParticipantSchema>("participant");
