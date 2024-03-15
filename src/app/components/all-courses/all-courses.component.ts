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
  searchKey: string ="";
  currentPage: number = 1;
  pageSize: number = 3;

  constructor(
    private coursesService: CoursesService,
    private route: ActivatedRoute){

      
      this.route.queryParams.pipe(
        tap(console.log),
        map((q)=>{
          if(q['search'])
            this.searchKey = q['search'];

          if(q['page'])
            this.currentPage = Number(q['page']);

          if(q['size'])
            this.pageSize = Number(q['size'])

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
    this.searchKey = e;
    this.sendPageRequest();
  }

  onPageChange(e:any){
    console.log(e);
    this.currentPage = e.page + 1;
    this.sendPageRequest();
  }


  sendPageRequest(){
    let finalUrl = env.baseURL + `courses?page=${this.currentPage}&size=${this.pageSize}`;
    if(this.searchKey)
      finalUrl += `&search=${this.searchKey}`;
    window.location.href = finalUrl;
  }

}
