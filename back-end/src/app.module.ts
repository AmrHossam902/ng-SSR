import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';
import { DbModule } from './db/db.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    CoursesModule, 
    DbModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname , '..','static-files'),
      serveRoot: '/static'
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
