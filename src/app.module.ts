import { ConfigModule, ConfigService } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { getJwtConfig } from './get.jwt.config';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal:true}),
    JwtModule.registerAsync({
      imports:[ConfigModule],
      inject:[ConfigService],
      useFactory:getJwtConfig
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
