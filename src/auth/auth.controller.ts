// auth.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from '../movies/dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login') // Rota para fazer login e obter um token JWT
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }
}
