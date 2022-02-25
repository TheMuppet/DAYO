import { Bson, MongoClient } from "../../../deps/web/deps.ts";
import { config } from "../../../deps/web/deps.ts";

const env = config();
const db_name: string = env.DB_NAME;
const db_user: string = env.DB_USERNAME;
const db_password: string = env.DB_PASSWORD;
const client = new MongoClient();

await client.connect({
  db: db_name,
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
    username: db_user,
    password: db_password,
    db: db_name,
    mechanism: "SCRAM-SHA-1",
  },
});

// for testing mongo connection
const db = client.database(db_name);

// Schema for testing (in future project prob use extra folder for Schemas)
interface UserSchema {
  _id: { $oid: string };
  name: string;
  email: string;
  phone: string;
}

interface BetsSchema {
  _id: Bson.ObjectId;
  userID: string;
  matches: Array<Array<string>>;
}

const User = db.collection<UserSchema>("user");
const Bets = db.collection<BetsSchema>("bets");
export { Bets, db, User };
