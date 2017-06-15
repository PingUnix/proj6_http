import { Component, OnInit } from '@angular/core';
import {DepartmentService} from './department.service';
import { Router } from '@angular/router';

import {Department} from './department';

@Component({
  selector: 'department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css'],
  providers: [DepartmentService]
})
export class DepartmentListComponent implements OnInit {
  departments: Department[];

  constructor(private dl:DepartmentService, 
              private router: Router) { }

  ngOnInit() {
    this.getDepartments();
  }
  getDepartments(){
    this.dl.getDepartments().subscribe(
      dep => this.departments = dep

    );
  }

  onSelect(department){
    this.router.navigate(['/departments', department.id]);

    //use router service to route page, 
    // args 1 , destination path, 
    //arg2  , parameter, id 
  }
}

