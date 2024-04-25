import { Body, Controller, Get, Post } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Course } from './schemas/course.schema';
import { Model } from 'mongoose';
import { CoursesService } from './courses.service';

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
    async createNewCourse(@Body() course: Course){
        console.log(course);
        return this.coursesService.createNewCourse(course);
    }

}
