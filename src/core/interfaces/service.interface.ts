/**
 * Interface for generic service operations
 * @template T Entity type
 * @template CreateDto DTO for create operations
 * @template UpdateDto DTO for update operations
 */
export interface IBaseService<T, CreateDto, UpdateDto> {
  findAll(options?: any): Promise<T[]>;
  findById(id: string): Promise<T>;
  findOne(options: any): Promise<T>;
  create(data: CreateDto): Promise<T>;
  update(id: string, data: UpdateDto): Promise<T>;
  softDelete(id: string): Promise<T>;
  hardDelete(id: string): Promise<void>;
  restore(id: string): Promise<T>;
  count(options?: any): Promise<number>;
}
