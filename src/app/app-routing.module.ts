import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { Error404Component } from './error404/error404.component';

const routes: Routes = [
  {path:'',redirectTo:'/startFramwork',pathMatch:'full'},
  {path:'startFramwork',component:HomeComponent,title:"home"},
  {path:'about',component:AboutComponent,title:"about"},
  {path:'portfolio',component:PortfolioComponent,title:"portfolio"},
  {path:'contact',component:ContactComponent,title:"contact"},
  {path:'**',component:Error404Component,title:"404" , },

];

@NgModule({
  imports: [RouterModule.forRoot(routes , {scrollPositionRestoration:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
