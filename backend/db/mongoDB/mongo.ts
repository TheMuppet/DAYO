import { Database, MongoClient } from "../../../deps/web/deps.ts";
import { config } from "../../../../deps/web/deps.ts";
import { PercistenceInterface } from "../percistenceInterface.ts";

const env = config();

export class MongoService implements PercistenceInterface {
  private readonly client: MongoClient;
  private db: Database;
  private readonly db_name: string;
  private readonly db_user: string;
  private readonly db_password: string;
  private readonly db_uri1: string;
  private readonly db_uri2: string;
  private readonly db_uri3: string;

  constructor() {
    this.client = new MongoClient();
    this.db_name = Deno.env.get("DB_NAME") || env.DB_NAME;
    this.db_user = Deno.env.get("DB_USERNAME") || env.DB_USERNAME;
    this.db_password = Deno.env.get("DB_PASSWORD") || env.DB_PASSWORD;
    this.db_uri1 = Deno.env.get("DB_URI1") || env.DB_URI1;
    this.db_uri2 = Deno.env.get("DB_URI2") || env.DB_URI2;
    this.db_uri3 = Deno.env.get("DB_URI3") || env.DB_URI3;
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
  }

  async insertOne(data: any, collection: string): Promise<void> {
    await this.db.collection(collection).insertOne(data);
  }

  async insertMany(data: any, collection: string): Promise<void> {
    await this.db.collection(collection).insertMany(data);
  }

  async findAll(CollectionName: string): Promise<any> {
    try {
      return await this.db.collection(CollectionName).find();
    } catch (_error) {
      console.log(`Error finding all ${CollectionName}`);
    }
  }

  async findOne(CollectionName: string, id: string): Promise<any> {
    try {
      return await this.db.collection(CollectionName).findOne({
        _id: { "$oid": id },
      });
    } catch (_error) {
      console.log(`Error finding one ${id}`);
    }
  }

  async getDatabase(): Promise<Database> {
    try {
      return this.db;
    } catch (_error) {
      console.log("Error getting database");
    }
  }

  async getClient(): Promise<MongoClient> {
    try {
      return this.client;
    } catch (_error) {
      console.log("Error getting client");
    }
  }
}

export const db = new MongoService();
