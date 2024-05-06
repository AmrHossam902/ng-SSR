import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Course } from './schemas/course.schema';
import { Model } from 'mongoose';
import { StorageService } from 'src/storage/storage.service';
import { IMulterFile } from './interfaces/ImulterFile.interface';
import { randomUUID } from 'crypto';
import { IAllCoursesRes } from './interfaces/IAllCoursesRes.interface';

@Injectable()
export class CoursesService {
    constructor(
        @InjectModel(Course.name) private courseModel: Model<Course>,
        private storageService: StorageService
    ){}

    async getAllCourses(page:number, size: number, search: string): Promise<IAllCoursesRes>{

        let filter = { 
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
        };

        let totalDocs = await this.courseModel.where(filter).countDocuments().exec()
        
        let records = await this.courseModel
            .find(filter, 
                {"_id": 0}
            )
            .skip((page - 1)* size)
            .limit(size);
        
        return {
            totalRecords: totalDocs,
            currentPage: page,
            records: records
        }
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
