import { MongoClient } from "../deps.ts";

const client = new MongoClient();
client.connectWithUri('mongodb://localhost');

const db = client.database("test");
const matchObj = db.collection("match");

export default matchObj;