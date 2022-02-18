import { Bson, MongoClient } from "https://deno.land/x/mongo@v0.29.0/mod.ts";

//import { MongoClient } from "../deps.ts";

const client = new MongoClient();


await client.connect({
    db: "DAYOdb",
    tls: true,
    servers: [
      {
        host: "dayodb-shard-00-02.acrbi.mongodb.net",
        port: 27017,
      },
      {
        host: "dayodb-shard-00-01.acrbi.mongodb.net",
        port: 27017,
      },
      {
        host: "dayodb-shard-00-00.acrbi.mongodb.net",
        port: 27017,
      },
    ],
    credential: {
      // hier stehen noch plaintext Passwort und so
      username: "admin",
      password: "admin",
      db: "DAYOdb",
      mechanism: "SCRAM-SHA-1",
    },
  });



// for testing mongo connection
const dbname: string = "DAYOdb"
const db = client.database(dbname)
  

interface UserSchema {
  _id: { $oid: string };
  name: string;
  email: string;
  phone: string;
}

const User = db.collection<UserSchema>("user");
export { db, User };



// client.connectWithUri('mongodb://localhost');

// const db = client.database("test");
// const matchObj = db.collection("match");

// export default matchObj;