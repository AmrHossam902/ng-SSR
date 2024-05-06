import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';
import { DbModule } from './db/db.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { StorageModule } from './storage/storage.module';

@Module({
  imports: [
    CoursesModule, 
    DbModule,
    StorageModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
