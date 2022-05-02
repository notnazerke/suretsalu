import { Component, OnInit } from '@angular/core';
import { CourseDetailsService } from 'src/app/services/course-details.service';

@Component({
  selector: 'app-favs',
  templateUrl: './favs.component.html',
  styleUrls: ['./favs.component.css']
})
export class FavsComponent implements OnInit {
  constructor(private service:CourseDetailsService) { }
  courseData:any;
  ngOnInit(): void {
    this.courseData = this.service.courseDetails;
  }
  addLike(courseData: any): void{
    if(courseData.isLiked==false){
      courseData.likes = courseData.likes + 1; 
      courseData.isLiked=true;
    }
    else{
      courseData.likes = courseData.likes - 1; 
      courseData.isLiked=false;
    }
  }


  Rate(courseData: any, num: number){
    if(courseData.isRated==false){
    courseData.rating = (courseData.rating+num)/2;
    courseData.isRated=true;
  }
}

Save(courseData: any): void{
  if(courseData.isSaved==false){ 
    courseData.isSaved=true;
  }
  else{
    
    courseData.isSaved=false;
  }
}
}
