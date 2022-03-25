export interface PercistenceInterface {
  insertOne(data: any): Promise<any>;
  insert(data: any): Promise<any>;
  update(data: any): Promise<any>;
  delete(data: any): Promise<any>;
  find(data: any): Promise<any>;
  findOne(data: any): Promise<any>;
}
