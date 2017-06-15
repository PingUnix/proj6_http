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
    this.router.navigate(['/departments', department.id]);

    //can be reusable in click and go back function

    //use router service to route page, 
    // args 1 , destination path, 
    //arg2  , parameter, id 
  }

  isSelected(department){ 
    
    return (parseInt(department.id) === this.selectId);
  }
}

