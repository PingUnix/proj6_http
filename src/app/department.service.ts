import { Injectable } from '@angular/core';
import {Http , Response} from '@angular/http';
import { Department } from './department';


@Injectable()
export class DepartmentService {
  private departmentUrl = './../public/department.json';
  departments:Department[];

  constructor(private departHttp:Http) { }

  getDepartments(){

    return this.departHttp.get(this.departmentUrl)
      .map((rep:Response) => rep = rep.json())

    ;
  }

}


 