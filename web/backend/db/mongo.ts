import { config } from "../../../deps.ts";
import { MongoClient } from "../../../deps.ts";

const env = config();
const client = new MongoClient();
const db_user: string = env.DB_USER;
const db_password: string = env.DB_PASSWORD;
const db_name: string = env.DB_NAME;
const db_uri: string = env.DB_URI;

await client.connect({
  db: db_name,
  tls: true,
  servers: [
    {
      host: db_uri,
      port: 27017,
    },
    {
      host: db_uri,
      port: 27017,
    },
    {
      host: db_uri,
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

const User = db.collection<UserSchema>("user");
export { db, User };
