import { db } from "../mongo.ts";

export interface AdminSchema {
  discordId: string;
  name: string;
}

export const Admin = db.collection<AdminSchema>("admins");
