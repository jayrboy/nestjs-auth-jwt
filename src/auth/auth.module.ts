import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { PassportAuthController } from './passport-auth.controller';
import { LocalStrategy } from './stratrgies/local.strategy';

@Module({
  providers: [AuthService, LocalStrategy],
  controllers: [AuthController, PassportAuthController],
  imports: [
    UsersModule,
    JwtModule.register({
      global: true,
      secret: 'jwtsecret',
      signOptions: { expiresIn: '1d' },
    }),
    PassportModule,
  ],
})
export class AuthModule {}
