import { Body, Controller, Get, ParseIntPipe, Post, Query, UploadedFile, UseInterceptors } from '@nestjs/common';
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
    async getAllCourses(
        @Query('page', new ParseIntPipe({"optional":true})) page: number = 1,
        @Query('size', new ParseIntPipe({"optional":true})) size: number = 3,
        @Query('search') search: string = ""
    ) {
        return this.coursesService.getAllCourses(page, size, search);
    }


    @Post("new")
    @UseInterceptors(FileInterceptor('imageFile') )
    async createNewCourse(@UploadedFile() courseImg: IMulterFile, @Body() course: Course){
        
        return this.coursesService.createNewCourse(course, courseImg);
    }

}
