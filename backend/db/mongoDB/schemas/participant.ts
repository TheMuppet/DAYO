import { Bson } from "../../../../deps/web/deps.ts";

// Schema for AYTO participants
export interface ParticipantSchema {
  _id: Bson.ObjectId;
  name: string;
  gender: string;
  age: number;
  img: string;
  season: number;
}
