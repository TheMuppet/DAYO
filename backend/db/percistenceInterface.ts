import {
  Filter,
  FindOptions,
} from "https://deno.land/x/mongo@v0.29.1/src/types.ts";

export interface PersistenceInterface {
  insertMany<T>(tableName: string, data: Array<T>): Promise<void>;
  insertOne<T>(tableName: string, data: T): Promise<void>;
  find<T>(
    tableName: string,
    filter?: Filter<T>,
    options?: FindOptions,
  ): Promise<Array<T> | undefined>;
  findOne<T, U>(tableName: string, data: U): Promise<T | undefined>;
}
