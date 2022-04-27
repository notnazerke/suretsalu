import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseDetailsService {

  constructor() { }

  courseDetails = [
    {
      id:1,
      title:"Fine Arts Aigerim",
      courseDetails:"Something",
      coursePrice: 30000,
      teacher:"Aigerim",
      saveStatus: false,
      courseImg:"https://images.unsplash.com/photo-1571950314243-22311024e76f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
    },

    {
      id:2,
      title:"Fashion Illustration",
      courseDetails:"Something",
      coursePrice: 35000,
      teacher:"Christina",
      saveStatus: false,
      courseImg:"https://images.unsplash.com/photo-1591926870242-9b01d19110d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },

    {
      id:3,
      title:"Sketching",
      courseDetails:"Something",
      coursePrice: 35000,
      teacher:"Ekaterina",
      saveStatus: false,
      courseImg:"https://images.unsplash.com/photo-1599420187429-774dbfc6ba5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
    },

    {
      id:4,
      title:"Urban Sketching",
      courseDetails:"Something",
      coursePrice: 35000,
      teacher:"Ekaterina",
      saveStatus: false,
      courseImg:"https://images.unsplash.com/photo-1516445681107-369b25967fd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
    },

    {
      id:5,
      title:"Portraits",
      courseDetails:"Something",
      coursePrice: 30000,
      teacher:"Christina",
      saveStatus: false,
      courseImg:"https://images.unsplash.com/photo-1612641605722-60c66c66530c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHNrZXRjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60"
    },

    {
      id:6,
      title:"Architecture",
      courseDetails:"Something",
      coursePrice: 35000,
      teacher:"Ekaterina",
      saveStatus: false,
      courseImg:"https://images.unsplash.com/photo-1584804738473-a49b7441c464?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"
    },
  ]
}
