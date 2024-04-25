import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';
import { DbModule } from './db/db.module';

@Module({
  imports: [CoursesModule, DbModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
