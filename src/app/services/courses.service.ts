import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from 'src/environments/env';
@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient) {

  }

  fetchCoursesList(q: Record<string,any>){
    
    const keysArr = Object.keys(q);
    if(keysArr.length == 0)
      return this.http.get<Course[]>(`${env.baseURL}api/courses-list`);

    let qs="?";
    keysArr.forEach(
      (key)=>{
        qs+= `${key}=${q[key]}`
      }
    );

    return this.http.get<Course[]>(`${env.baseURL}api/courses-list${qs}`);
  }

}

export type Course = {
  name: string;
  price: number;
  img: string;
}
