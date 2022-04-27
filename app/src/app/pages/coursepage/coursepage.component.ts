import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseDetailsService } from 'src/app/services/course-details.service';
CourseDetailsService
@Component({
  selector: 'app-coursepage',
  templateUrl: './coursepage.component.html',
  styleUrls: ['./coursepage.component.css']
})
export class CoursepageComponent implements OnInit {

  constructor(private param:ActivatedRoute, private service:CourseDetailsService) { }

  getCourseId:any;
  courseData:any;

  ngOnInit(): void {
    this.getCourseId = this.param.snapshot.paramMap.get('id');
    console.log(this.getCourseId, 'getmenu');

    if(this.getCourseId){
      this.courseData = this.service.courseDetails.filter((value)=>{
        return value.id == this.getCourseId;
        })
      }
    }

}
