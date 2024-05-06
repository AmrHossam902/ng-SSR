import { Module } from '@nestjs/common';
import { CoursesController } from './courses.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Course, CourseSchema } from './schemas/course.schema';
import { CoursesService } from './courses.service';
import { StorageModule } from 'src/storage/storage.module';

@Module({
  controllers: [CoursesController],
  imports: [MongooseModule.forFeature([
      {
        name: Course.name,
        schema: CourseSchema
      }
    ]),
    StorageModule
  ],

  providers: [CoursesService]
})
export class CoursesModule {}
