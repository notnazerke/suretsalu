import { Component, OnInit } from '@angular/core';
import { CourseDetailsService } from 'src/app/services/course-details.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor(private service: CourseDetailsService) {}
    courseData:any;
   

  ngOnInit(): void {
    this.courseData = this.service.courseDetails;
  }
  like(): void{
    this.courseData.like++;
  }
  
  addRaiting1(){

    this.courseData.rating = (this.courseData.rating+1)/2;

    this.courseData.check = true;

  }




  addRaiting2(){

    this.courseData.rating = (this.courseData.rating+2)/2;

    this.courseData.check = true;

  }




  addRaiting3(){

    this.courseData.rating = (this.courseData.rating+3)/2;

    this.courseData.check = true;

  }




  addRaiting4(){

    this.courseData.rating = (this.courseData.rating+4)/2;

    this.courseData.check = true;

  }




  addRaiting5(){

    this.courseData.rating = (this.courseData.rating+5)/2;

    this.courseData.check = true;

  }
  getRating(): number {

    return Math.round(this.courseData.rating);

  }
}
