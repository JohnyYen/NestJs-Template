import { ApiProperty } from '@nestjs/swagger';

/**
 * Formato estándar para respuestas API
 * @template T Tipo de los datos de respuesta
 */
export class ResponseFormat<T> {
  @ApiProperty({
    description: 'Indica si la solicitud fue exitosa',
    example: true,
  })
  success: boolean;

  @ApiProperty({
    description: 'Mensaje descriptivo de la respuesta',
    example: 'Operación completada con éxito',
  })
  message: string;

  @ApiProperty({
    description: 'Datos de la respuesta',
    required: false,
  })
  data?: T;

  @ApiProperty({
    description: 'Metadatos adicionales con respecto al error',
    required: false,
  })
  error?: {
    code: number;
    details: string;
    timestamp: string;
  };

  constructor(partial: Partial<ResponseFormat<T>>) {
    Object.assign(this, partial);
  }
}
