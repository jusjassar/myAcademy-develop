import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesService } from './Services/courses.service';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './ErrorPage/error.component';

const myRoutes:Routes=[
  {path:'',component:HomeComponent},
  {path:'Home',component:HomeComponent},
  {path:'Courses',component:CoursesComponent},
  {path:'Contact',component:ContactComponent},
  {path:'About',component:AboutComponent},
  {path:'**',component:ErrorComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    CoursesComponent,
    ErrorComponent
    
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(myRoutes)
  ],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
