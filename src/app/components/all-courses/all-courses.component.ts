import { Component } from '@angular/core';
import { Course, CoursesService } from '../../services/courses.service';
import { env
 } from 'src/environments/env';
import { ActivatedRoute } from '@angular/router';
import { map, tap } from 'rxjs';
@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.scss']
})
export class AllCoursesComponent {

  coursesList: Course[] = [];

  constructor(
    private coursesService: CoursesService,
    private route: ActivatedRoute){

      route.queryParams.pipe(
        tap(console.log),
        map((q)=>{
          this.coursesService.fetchCoursesList(q).subscribe(
            (res: Course[])=>{ this.coursesList = res }
          )
        })
      )
      .subscribe()


  }

/*   filterItems(){
    console.log("filter items");
    window.location.href = `http://localhost:4200/courses?search=${this.searchKey}`
  }
 */

  onSearchEvent(e:string){
    console.log(e);
    window.location.href = `http://localhost:4200/courses?search=${e}`
  }

}
