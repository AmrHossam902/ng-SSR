import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { AllCoursesComponent } from './components/all-courses/all-courses.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'courses',
    component: AllCoursesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
