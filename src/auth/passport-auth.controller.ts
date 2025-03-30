import {
  Controller,
  HttpCode,
  HttpStatus,
  NotImplementedException,
  Post,
  Get,
  UseGuards,
  Request,
} from '@nestjs/common';

import { AuthService } from './auth.service';
import { AuthGuard } from './guards/auth.guard';
import { PassportLocalGuard } from './guards/passport-local.guard';

@Controller('auth-v2')
export class PassportAuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  @UseGuards(PassportLocalGuard)
  login(@Request() request) {
    return this.authService.signIn(request.user);
  }

  @UseGuards(AuthGuard)
  @Get('me')
  getUserInfo() {
    throw new NotImplementedException();
  }
}
