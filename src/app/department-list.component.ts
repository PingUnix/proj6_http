import { Component, OnInit } from '@angular/core';
import {DepartmentService} from './department.service';

import {Department} from './department';

@Component({
  selector: 'department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css'],
  providers: [DepartmentService]
})
export class DepartmentListComponent implements OnInit {
  departments: Department[];

  constructor(private dl:DepartmentService) { }

  ngOnInit() {
    this.getDepartments();
  }
  getDepartments(){
    this.dl.getDepartments().subscribe(
      dep => this.departments = dep


    );

  }
}

