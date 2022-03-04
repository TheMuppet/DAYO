import { config } from "../../../deps.ts";
import { MongoClient } from "../../../deps.ts";

const env = config();
const client = new MongoClient();
const db_user: string = env.DB_USER;
const db_password: string = env.DB_PASSWORD;
const db_name: string = env.DB_NAME;
const db_uri1: string = env.DB_URI1;
const db_uri2: string = env.DB_URI2;
const db_uri3: string = env.DB_URI3;

await client.connect({
  db: db_name,
  tls: true,
  servers: [
    {
      host: db_uri1,
      port: 27017,
    },
    {
      host: db_uri2,
      port: 27017,
    },
    {
      host: db_uri3,
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

export { db };
