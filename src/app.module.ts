import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ComplaintModule } from './complaint/complaint.module';

@Module({
  imports: [ComplaintModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
