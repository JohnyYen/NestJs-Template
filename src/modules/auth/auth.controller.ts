import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthLoginDto } from './dto/auth-login.dto';
import { AuthRegisterDto } from './dto/auth-register.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  login(@Body() login: AuthLoginDto) {
    return this.authService.login(login);
  }

  @Post()
  register(@Body() register: AuthRegisterDto) {
    return this.authService.register(register);
  }
}
