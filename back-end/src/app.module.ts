import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { MeModule } from './me/me.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRootAsync({
      useFactory: () => {
        return {
          uri: `mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PW}@${process.env.MONGO_HOST_IP}:${process.env.MONGO_PORT}/${process.env.MONGO_INITDB_DATABASE}`,
        };
      },
    }),
    AuthModule,
    UserModule,
    MeModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
