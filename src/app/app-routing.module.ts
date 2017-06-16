import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { JsonpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HeroListComponent } from './hero-list.component';
import { DepartmentListComponent } from './department-list.component';
import { DepartmentdetailComponent } from './departmentdetail.component';
import { HomeComponent} from './home.component';
import { PageNotFoundComponent} from './page-not-found.component';
import { Component} from '@angular/core';
const routes:Routes = [
   {path: '', redirectTo:'/departments', pathMatch:'full'},
    {path : 'departments', component:DepartmentListComponent},
    {path: 'heroes', component:HeroListComponent},
    {path: 'departments/:id', component:DepartmentdetailComponent},
    
    {path: '**', component:PageNotFoundComponent}

];

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{

}
//1 configure the router, add routers to the Routermodule, meaning edit the forRoot function,
//2 attach routermodule with AppRoutingModule via decorator NgModule, 

export const routingComponents = [AppComponent,DepartmentdetailComponent,DepartmentListComponent,HomeComponent, PageNotFoundComponent,HeroListComponent]
//3. add all components which are used when routing to array 