import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ButtonModule } from 'primeng/button'
import {CardModule} from "primeng/card";
import { FileUploadModule } from 'primeng/fileupload';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './components/main/main.component';
import { AllCoursesComponent } from './components/all-courses/all-courses.component';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { SearchComponent } from './components/search/search.component';
import { PaginatorModule } from 'primeng/paginator';
import { AddCourseComponent } from './components/add-course/add-course.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AllCoursesComponent,
    SearchComponent,
    AddCourseComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'SSR-tut'}),
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ButtonModule,
    CardModule,
    FileUploadModule,
    PaginatorModule,
    TransferHttpCacheModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    InputTextareaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
