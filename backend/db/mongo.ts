import { config, Database, MongoClient } from "../../deps/web/deps.ts";
import { FindCursor } from "../../deps/discord/deps.ts";
import { PersistenceInterface } from "./percistenceInterface.ts";

const env = config();

export class MongoService implements PersistenceInterface {
  private readonly client: MongoClient;
  private db: Database;
  private readonly db_name: string;
  private readonly db_user: string;
  private readonly db_password: string;
  private readonly db_uri1: string;
  private readonly db_uri2: string;
  private readonly db_uri3: string;

  constructor(
    db_name?: string,
    db_user?: string,
    db_password?: string,
    db_uri1?: string,
    db_uri2?: string,
    db_uri3?: string,
  ) {
    this.client = new MongoClient();
    this.db_name = db_name || Deno.env.get("DB_NAME") || env.DB_NAME;
    this.db_user = db_user || Deno.env.get("DB_USERNAME") || env.DB_USERNAME;
    this.db_password = db_password || Deno.env.get("DB_PASSWORD") ||
      env.DB_PASSWORD;
    this.db_uri1 = db_uri1 || Deno.env.get("DB_URI1") || env.DB_URI1;
    this.db_uri2 = db_uri2 || Deno.env.get("DB_URI2") || env.DB_URI2;
    this.db_uri3 = db_uri3 || Deno.env.get("DB_URI3") || env.DB_URI3;
  }

  async connect(): Promise<void> {
    try {
      await this.client.connect({
        db: this.db_name,
        tls: true,
        servers: [
          {
            host: this.db_uri1,
            port: 27017,
          },
          {
            host: this.db_uri2,
            port: 27017,
          },
          {
            host: this.db_uri3,
            port: 27017,
          },
        ],
        credential: {
          username: this.db_user,
          password: this.db_password,
          db: this.db_name,
          mechanism: "SCRAM-SHA-1",
        },
      });
    } catch (_error) {
      console.log("Error connecting to MongoDB");
    }
    this.db = this.client.database(this.db_name);
  }

  async insert<T>(collection: string, data: Array<T>): Promise<void> {
    await this.db.collection<T>(collection).insert(data);
  }

  async insertOne<T>(tableName: string, data: T): Promise<void> {
    await this.db.collection<T>(tableName).insertOne(data);
  }

  async find<T, U, V>(
    tableName: string,
    filter?: U,
    options?: V,
  ): Promise<T[]> {
    const findings: FindCursor<T> = await this.db.collection<T>(tableName).find(
      filter,
      options,
    );
    return findings.toArray().then(function (data: T[]) {
      return data;
    });
  }

  async findOne<T, U>(tableName: string, data: U): Promise<T | undefined> {
    return await this.db.collection<T>(tableName).findOne(data);
  }
}

export const db = new MongoService();
