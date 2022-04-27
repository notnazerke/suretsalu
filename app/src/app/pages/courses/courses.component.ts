import { Component, OnInit } from '@angular/core';
import { CourseDetailsService } from 'src/app/services/course-details.service';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor(private service:CourseDetailsService) { }
  courseData:any;
  ngOnInit(): void {
    this.courseData = this.service.courseDetails;
  }

}
