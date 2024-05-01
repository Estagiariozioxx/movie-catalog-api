// auth.service.ts
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from '../movies/dto/login.dto';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async login(loginDto: LoginDto) {
    const { username, password } = loginDto;

    // Simulação de autenticação
    if (username === 'admin' && password === 'admin') {
      const payload = { username, sub: 1 };
      return {
        access_token: this.jwtService.sign(payload),
      };
    } else {
      return { message: 'Credenciais inválidas' };
    }
  }
}
