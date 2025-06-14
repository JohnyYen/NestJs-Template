export interface IBaseRepository<T> {
  findAll(options?: any): Promise<T[]>;
  findById(id: string): Promise<T | null>;
  findOne(options: any): Promise<T | null>;
  create(data: Partial<T>): Promise<T>;
  update(id: string, data: Partial<T>): Promise<T>;
  softDelete(id: string): Promise<T>;
  hardDelete(id: string): Promise<void>;
  restore(id: string): Promise<T>;
  count(options?: any): Promise<number>;
}