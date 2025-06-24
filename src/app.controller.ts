import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  initServer(): string {
    return 'Setup Server';
  }
}
