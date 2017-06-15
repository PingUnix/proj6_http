import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import {  JsonpModule } from '@angular/http';
import { AppComponent } from './app.component';
//import { HeroListComponent } from './hero-list.component';
//import { DepartmentListComponent } from './department-list.component';
import { AppRoutingModule } from './app-routing.module';
import { routingComponents} from './app-routing.module';
import { DepartmentdetailComponent } from './departmentdetail.component';


//add customized approutingmodule 
@NgModule({
  declarations: [
    AppComponent,
   //HeroListComponent,
    //DepartmentListComponent,
    routingComponents,
   DepartmentdetailComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    /*RouterModule.forRoot([
      {path:'departments', component:DepartmentListComponent},
      {path:'heroes',component:HeroListComponent }
    ])*/
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
 // exports:[NgModule]
})
export class AppModule { }
