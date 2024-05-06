import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Course } from './schemas/course.schema';
import { Model } from 'mongoose';
import { StorageService } from 'src/storage/storage.service';
import { IMulterFile } from './interfaces/ImulterFile.interface';
import { randomUUID } from 'crypto';

@Injectable()
export class CoursesService {
    constructor(
        @InjectModel(Course.name) private courseModel: Model<Course>,
        private storageService: StorageService
    ){}

    async getAllCourses(page:number, size: number, search: string){
        
        return this.courseModel
            .find(
                { 
                    "$or": [
                        {
                            "title" : {
                                "$regex" : search,
                                "$options": "i"
                            }
                        },{
                            "desc" : {
                                "$regex" : search,
                                "$options": "i"
                            }
                        }
                    ]
                }, 
                {"_id": 0})
            .skip((page - 1)* size)
            .limit(size);
    }

    async createNewCourse(course: Course, courseImg: IMulterFile){

        //store image 
        let newImageName = `${randomUUID()}.${courseImg.originalname.split('.')[1]}`;
        this.storageService.saveFile('courses', newImageName, courseImg.buffer )

        course.imageUrl = '/courses/' + newImageName;

        let courseDoc = new this.courseModel(course);
        return courseDoc.save();
    }



}
