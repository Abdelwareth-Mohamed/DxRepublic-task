import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  
  { path: 'home', component:HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component:HomeComponent },
  { path: 'login', component:HomeComponent },
  { path: 'reg', component: AboutComponent },
  { path: '', component:HomeComponent },
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
