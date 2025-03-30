import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { PassportAuthController } from './passport-auth.controller';
import { LocalStrategy } from './stratrgies/local.strategy';
import { JwtStrategy } from './stratrgies/jwt.strategy';

import { JWT_SECRET } from 'src/config/jwt-secret';

@Module({
  providers: [AuthService, LocalStrategy, JwtStrategy],
  controllers: [AuthController, PassportAuthController],
  imports: [
    UsersModule,
    JwtModule.register({
      global: true,
      secret: JWT_SECRET,
      signOptions: { expiresIn: '1d' },
    }),
    PassportModule,
  ],
})
export class AuthModule {}
