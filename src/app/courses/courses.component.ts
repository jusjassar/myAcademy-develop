import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../Services/courses.service';
import { Course } from '../courses.interface';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  constructor(private coursesService:CoursesService){}

  courses:Course[] = [];

  ngOnInit(){
    this.courses=this.coursesService.courses
  }

}
