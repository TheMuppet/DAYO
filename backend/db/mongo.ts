import {
  config,
  Database,
  Filter,
  FindOptions,
  MongoClient,
} from "../../deps/web/deps.ts";
import { FindCursor } from "../../deps/discord/deps.ts";
import { PersistenceInterface } from "./percistenceInterface.ts";

const env = config();
const dbName = Deno.env.get("DB_NAME") || env.DB_NAME;
const dbUser = Deno.env.get("DB_USERNAME") || env.DB_USERNAME;
const dbPassword = Deno.env.get("DB_PASSWORD") ||
  env.DB_PASSWORD;
const dbUri1 = Deno.env.get("DB_URI1") || env.DB_URI1;
const dbUri2 = Deno.env.get("DB_URI2") || env.DB_URI2;
const dbUri3 = Deno.env.get("DB_URI3") || env.DB_URI3;
export const client = new MongoClient();

await client.connect({
  db: dbName,
  tls: true,
  servers: [
    {
      host: dbUri1,
      port: 27017,
    },
    {
      host: dbUri2,
      port: 27017,
    },
    {
      host: dbUri3,
      port: 27017,
    },
  ],
  credential: {
    username: dbUser,
    password: dbPassword,
    db: dbName,
    mechanism: "SCRAM-SHA-1",
  },
});

export class MongoService implements PersistenceInterface {
  private db: Database;

  constructor(db: Database) {
    this.db = db;
  }

  async insertMany<T>(collection: string, data: Array<T>): Promise<void> {
    await this.db.collection<T>(collection).insertMany(data);
  }

  async insertOne<T>(tableName: string, data: T): Promise<void> {
    await this.db.collection<T>(tableName).insertOne(data);
  }

  async find<T>(
    tableName: string,
    filter: Filter<T>,
    options: FindOptions,
  ): Promise<Array<T>> {
    const findings: FindCursor<T> = await this.db.collection<T>(tableName).find(
      filter,
      options,
    );
    return findings.toArray();
  }

  async findOne<T, U>(tableName: string, data: U): Promise<T | undefined> {
    return await this.db.collection<T>(tableName).findOne(data);
  }
}

export const db = new MongoService(client.database(dbName));
