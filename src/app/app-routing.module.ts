import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { OffersComponent } from './pages/offers/offers.component';
import { PartnersComponent } from './pages/partners/partners.component';
import { RegisterComponent } from './pages/register/register.component';
import { ReviewsComponent } from './pages/reviews/reviews.component';

const routes: Routes = [
  
  { path: 'home', component:HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component:ContactComponent },
  { path: 'reviews', component:ReviewsComponent },
  { path: 'offers', component: OffersComponent },
  { path: 'partners', component:PartnersComponent },
  { path: 'login', component:LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', component:HomeComponent },
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
