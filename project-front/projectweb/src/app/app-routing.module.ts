import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CoursepageComponent } from './pages/coursepage/coursepage.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'courses', component: CoursesComponent},
  {path:'courses/:id', component: CoursepageComponent},
  {path:'about', component: AboutComponent},
  {path:'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }