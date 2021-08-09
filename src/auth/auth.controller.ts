import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { GetUser } from './get-user.decorator';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }
  @Post('/register')
  register(@Body() loginDto: LoginDto) {
    return this.authService.register(loginDto);
  }

  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  @Post('/logout')
  logout(@GetUser() user) {
    return this.authService.logout(user.token);
  }

  @Post('/refreshToken')
  refreshToken(@Body() { refreshToken }) {
    return this.authService.refreshToken(refreshToken);
  }

  @Get('/user')
  @UseGuards(JwtAuthGuard)
  getUser(@GetUser() user) {
    const { id, email, last_sign_in_at, created_at } = user;
    return { id, email, lastSignIn: last_sign_in_at, createdAt: created_at };
  }
}
