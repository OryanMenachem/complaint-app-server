import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ComplaintModule } from './complaint/complaint.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..', 'client', 'public'),
    }),
    ComplaintModule,
    MongooseModule.forRoot(process.env.MONGODB_URI!),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
