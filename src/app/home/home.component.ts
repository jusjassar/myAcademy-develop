import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../Services/courses.service';
import { Course } from '../courses.interface';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private coursesService: CoursesService) { }

  courses:Course[]= [];

  ngOnInit(): void {
    this.courses = this.coursesService.courses;
  }

}
