import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { GetUser } from './auth/get-user.decorator';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  getHello(@GetUser() user): string {
    console.log(user);
    return this.appService.getHello();
  }
}
