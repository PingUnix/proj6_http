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
import { Node1Component } from './node1/node1.component';
import { BoldHoverDirective } from './bold-hover.directive';
import { DirectiveExampleComponent } from './directive-example.component';
import { HiddenDirective } from './hidden.directive';
import { T1Component } from './t1.component';


//add customized approutingmodule to app.module, hiding the components used in routing 
//separate the components with routing, providing a common place to configure the routing
//modulized 

@NgModule({
  declarations: [
    AppComponent,
   //HeroListComponent,
    //DepartmentListComponent,
    routingComponents,
   Node1Component,
   BoldHoverDirective,
   DirectiveExampleComponent,
   HiddenDirective,
   T1Component
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
  bootstrap: [AppComponent],

 // exports:[NgModule]
})
export class AppModule { }
