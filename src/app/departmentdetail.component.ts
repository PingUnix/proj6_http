import { Component, OnInit ,Input} from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  //selector: 'app-departmentdetail', //do not need selector, just routing to page html
  templateUrl: './departmentdetail.component.html',
  styleUrls: ['./departmentdetail.component.css']
})
export class DepartmentdetailComponent implements OnInit {

  public ids:number;
  public name1:string = "new id";
  constructor(private route:ActivatedRoute) { }
  //service of activeroute

  //fetch the parameter , id in the init function
  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    //id match the id configured in the router, 
    //retrive the id by the snapshot 
    this.ids = id;
  }

}
