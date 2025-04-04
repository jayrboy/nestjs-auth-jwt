import { AuthService } from './../auth.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy, 'my-local') {
  constructor(private authService: AuthService) {
    super({
      usernameField: 'login',
      passwordField: 'pass',
    });
  }

  async validate(username: string, password: string): Promise<any> {
    const user = await this.authService.validateUser({
      username,
      password,
    });

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
