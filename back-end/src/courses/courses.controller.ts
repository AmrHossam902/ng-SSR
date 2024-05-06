import { Body, Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Course } from './schemas/course.schema';
import { Model } from 'mongoose';
import { CoursesService } from './courses.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { IMulterFile } from './interfaces/ImulterFile.interface';



@Controller('courses')
export class CoursesController {

    constructor(
        private coursesService: CoursesService
    ){}

    @Get("")
    async getAllCourses() {
        return this.coursesService.getAllCourses();
    }


    @Post("new")
    @UseInterceptors(FileInterceptor('imageFile') )
    async createNewCourse(@UploadedFile() courseImg: IMulterFile, @Body() course: Course){
        


        return this.coursesService.createNewCourse(course, courseImg);
    }

}
