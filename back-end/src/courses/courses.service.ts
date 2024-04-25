import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Course } from './schemas/course.schema';
import { Model } from 'mongoose';

@Injectable()
export class CoursesService {
    constructor(
        @InjectModel(Course.name) private courseModel: Model<Course>
    ){}

    async getAllCourses(){
        return this.courseModel.find({});
    }

    async createNewCourse(course: Course){
        let courseDoc = new this.courseModel(course);
        return courseDoc.save();
    }

}
