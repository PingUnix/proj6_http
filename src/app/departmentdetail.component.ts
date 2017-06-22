import { Component, OnInit ,Input, } from '@angular/core';
import { ActivatedRoute, Router,Params} from '@angular/router';

@Component({
  //selector: 'app-departmentdetail', //do not need selector, just routing to page html
  templateUrl: './departmentdetail.component.html',
  styleUrls: ['./departmentdetail.component.css']
})
export class DepartmentdetailComponent implements OnInit {
  @Input() st:string;

  public ids:number;
  public random = 19;
  public name1:string = "new id";

  tsize = 'blue';
  constructor(private route:ActivatedRoute,
              private rter: Router) { }
  //service of activeroute

  //fetch the parameter , id in the init function
  /*ngOnInit() {
    let id = parseInt(this.route.snapshot.params['id']);
    //id match the id configured in the router, 
    //retrive the id by the snapshot 
    this.ids = id;
  }
*/
  ngOnInit() {
    console.log(this.st);
    this.route.params.subscribe( (parm:Params) => 
    {
      let id = parseInt(parm['id']);
      console.log("logging " + id);
      this.ids = id;
    });
  }
  goPrev(){
    let preId = this.ids - 1;
    this.rter.navigate(['/departmentsList',preId]);
  }
  goNext(){
    let nextId = this.ids +  1;
    this.rter.navigate(['./departmentsList',nextId]);
  }
  goToDepartments(){
    let selectedId = this.ids ? this.ids:null;
   this.rter.navigate( ['../', {id:selectedId}], {relativeTo:this.route});
    //current depart id 
   // this.rter.navigate(['/departments',{id:selectedId, randoms:this.random}]);
   //****this.rter.navigate(['/departmentsList',{id:selectedId}]);

   //optional path
   //this.rter.navigate(['/departments','']);
    console.log("goToDepartments" + selectedId);
  }

}
