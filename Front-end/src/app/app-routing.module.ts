import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { AllCoursesComponent } from './components/all-courses/all-courses.component';
import { AddCourseComponent } from './components/add-course/add-course.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'courses',
    component: AllCoursesComponent
  },
  {
    path: 'new-course',
    component: AddCourseComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
