export interface PersistenceInterface {
  insert<T>(tableName: string, data: Array<T>): Promise<void>;
  insertOne<T>(tableName: string, data: T): Promise<void>;
  find<T, U, V>(tableName: string, filter?: U, options?: V): Promise<T[]>;
  findOne<T, U>(tableName: string, data: U): Promise<T | undefined>;
}
