import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CoursesService } from '../../services/courses.service';
import { ICourse } from 'src/app/interfaces/Icourse.interface';
import { env } from 'src/environments/env';
import { ActivatedRoute } from '@angular/router';
import { map, tap } from 'rxjs';
import { isPlatformServer } from '@angular/common';
import { IAllCoursesRes } from 'src/app/interfaces/IAllCoursesRes.interface';

@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.scss']
})
export class AllCoursesComponent {

  coursesList: ICourse[] = [];
  searchKey: string ="";
  currentPage: number = 1;
  pageSize: number = 3;
  totalRecords:number = 0;
  
  constructor(
    private coursesService: CoursesService,
    private route: ActivatedRoute,
    @Inject(PLATFORM_ID) private platformId: Object){


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
            (res: IAllCoursesRes)=>{ 
              if(isPlatformServer(this.platformId)){
                res.records .forEach( course =>{
                  course.imageUrl = env.apiURL + '/static' + course.imageUrl; 
                })
              }
              console.log(res);
              this.currentPage = res.currentPage;
              this.totalRecords =res.totalRecords;
              this.coursesList = res.records;

            }
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
    this.currentPage=1;
    this.sendPageRequest();
  }

  onPageChange(e:any){
    console.log(e);
    if(this.currentPage != e.page + 1){
      this.currentPage = e.page + 1;
      this.sendPageRequest();
    }
  }


  sendPageRequest(){
    let finalUrl = env.baseURL + `/courses?page=${this.currentPage}&size=${this.pageSize}`;
    if(this.searchKey)
      finalUrl += `&search=${this.searchKey}`;
    window.location.href = finalUrl;
  }

}
