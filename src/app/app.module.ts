import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ButtonModule } from 'primeng/button'
import {CardModule} from "primeng/card";
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './components/main/main.component';
import { AllCoursesComponent } from './components/all-courses/all-courses.component';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext'
import { SearchComponent } from './components/search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AllCoursesComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'SSR-tut'}),
    AppRoutingModule,
    HttpClientModule,
    ButtonModule,
    CardModule,
    TransferHttpCacheModule,
    FormsModule,
    InputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
