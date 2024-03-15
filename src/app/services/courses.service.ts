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
      return this.http.get<Course[]>(`${env.baseURL}api/courses-list`, {"params": q});
  }

}

export type Course = {
  name: string;
  price: number;
  img: string;
}
