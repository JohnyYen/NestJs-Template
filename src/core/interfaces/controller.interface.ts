import { ResponseFormat } from '../dto/response-format.dto';

/**
 * Interface para operaciones básicas de un controlador REST
 * @template T Tipo de la entidad
 * @template CreateDto DTO para creación
 * @template UpdateDto DTO para actualización
 */
export interface IBaseController<T, CreateDto, UpdateDto> {
  findAll(): Promise<ResponseFormat<T[]>>;
  findById(id: string): Promise<ResponseFormat<T>>;
  create(data: CreateDto): Promise<ResponseFormat<T>>;
  update(id: string, data: UpdateDto): Promise<ResponseFormat<T>>;
  delete(id: string): Promise<ResponseFormat<void>>;
}
