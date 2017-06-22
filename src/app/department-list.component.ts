import { Component, OnInit } from '@angular/core';
import {DepartmentService} from './department.service';
import { Router, Params,ActivatedRoute } from '@angular/router';

import {Department} from './department';

@Component({
  selector: 'department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css'],
  providers: [DepartmentService]
})
export class DepartmentListComponent implements OnInit {
  departments: Department[];
  parm1 = "center";
  tab = 1;
  arr=[1,2,3,4];
  item = 1;
  selectId:number;
  
  constructor(private dl:DepartmentService, 
              private router: Router,
              private art: ActivatedRoute) { }

  ngOnInit() {
    this.getDepartments();
    this.art.params.subscribe( (parm:Params) => 
    {
      let id = parseInt(parm['id']);
     
      this.selectId = id;
    });
  }
  getDepartments(){
    this.dl.getDepartments().subscribe(
      dep => this.departments = dep

    );
  }

  onSelect(department){
    //this.router.navigate(['/departmentsList', department.id]);
    this.router.navigate([department.id], {relativeTo:this.art});
   
   
    //curerent path router
    //can be reusable in click and go back function

    //use router service to route page, 
    // args 1 , destination path, 
    //arg2  , parameter, id 
  }

  isSelected(department){ 
    
    return (parseInt(department.id) === this.selectId);
  }

   private people = [
            {id: 1, name: {forename: 'John', surname: 'Doe'}},
            {id: 2, name: {forename: 'John1', surname: 'Smith'}},
            {id: 3, name: {forename: 'Peter', surname: 'Scott'}},
            {id: 4, name: {forename: 'Sue', surname: 'Reece'}}
        ];

    private trackByName(indexs: number, person: any) {
      console.log(person.name.surname);
        return person.name.surname;
    }
    private forLoopArray(elements: number): Array<any> {
        return new Array(elements);
    }
}

