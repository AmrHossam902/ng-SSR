import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from 'src/environments/env';
import { ICourse } from '../interfaces/Icourse.interface';
@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient) {

  }

  fetchCoursesList(q: Record<string,any>){  
      return this.http.get<ICourse[]>(`${env.apiURL}/courses`, {"params": q});
  }


  createNewCourse(course: ICourse){

    console.log("inside course service", course);


    //preparing multipart form data
    let formData = new FormData()
    formData.set('title', course.title);
    formData.set('desc', course.desc);
/*     formData.set('price', course.price.toString());
    formData.set('startDate', course.startDate.toISOString());
    formData.set('endDate', course.endDate.toISOString()); */
    formData.set('imageFile', course.imageFile as Blob)

    return this.http.post(`${env.apiURL}/courses/new`, formData);
  }

}

