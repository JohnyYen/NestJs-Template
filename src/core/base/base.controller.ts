// src/core/base/base.controller.ts

import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { IBaseController } from '../interfaces/controller.interface';
import { ResponseFormat } from '../dto/response-format.dto';
import { IBaseService } from '../interfaces/service.interface';

@Controller()
export abstract class BaseController<T, CreateDto, UpdateDto>
  implements IBaseController<T, CreateDto, UpdateDto>
{
  constructor(
    protected readonly service: IBaseService<T, CreateDto, UpdateDto>,
    protected readonly entityName: string,
  ) {}

  @Get()
  @ApiOperation({ summary: 'Obtener todos los registros' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Lista de registros obtenida correctamente',
    type: ResponseFormat<T[]>,
  })
  async findAll(): Promise<ResponseFormat<T[]>> {
    const data = await this.service.findAll();
    return new ResponseFormat({
      success: true,
      message: `${this.entityName}s obtenidos correctamente`,
      data,
    });
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un registro por ID' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Registro obtenido correctamente',
    type: ResponseFormat<T>,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Registro no encontrado',
  })
  async findById(@Param('id') id: string): Promise<ResponseFormat<T>> {
    const data = await this.service.findById(id);
    return new ResponseFormat({
      success: true,
      message: `${this.entityName} obtenido correctamente`,
      data,
    });
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Crear un nuevo registro' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Registro creado correctamente',
    type: ResponseFormat<T>,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Datos de entrada inválidos',
  })
  async create(@Body() data: CreateDto): Promise<ResponseFormat<T>> {
    const result = await this.service.create(data);
    return new ResponseFormat({
      success: true,
      message: `${this.entityName} creado correctamente`,
      data: result,
    });
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar un registro' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Registro actualizado correctamente',
    type: ResponseFormat<T>,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Registro no encontrado',
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Datos de entrada inválidos',
  })
  async update(
    @Param('id') id: string,
    @Body() data: UpdateDto,
  ): Promise<ResponseFormat<T>> {
    const result = await this.service.update(id, data);
    return new ResponseFormat({
      success: true,
      message: `${this.entityName} actualizado correctamente`,
      data: result,
    });
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un registro (soft delete)' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Registro eliminado correctamente',
    type: ResponseFormat<void>,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Registro no encontrado',
  })
  async delete(@Param('id') id: string): Promise<ResponseFormat<void>> {
    await this.service.softDelete(id);
    return new ResponseFormat({
      success: true,
      message: `${this.entityName} eliminado correctamente`,
    });
  }
}