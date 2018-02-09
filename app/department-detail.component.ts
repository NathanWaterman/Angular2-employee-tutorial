import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DepartmentListComponent } from './department-list.component';

@Component({
  template: `
  			 <table style="width:100%; margin-top:150px">
			  <tr>
			    <th>Your ID </th>
			    <th>Your Name</th> 
			    <th>Your Gender</th>
			    <th>Your Department</th>
			    <th>Your Fav Number</th>
			  </tr>
			  <tr>
			    <td>{{departmentId}}</td>
			    <td>{{name}}</td> 
			    <td>{{gender}}</td>
			    <td>{{dept}}</td>
			    <td>{{number}}</td>
			  </tr>
			</table>

  			`
})

export class DepartmentDetailComponent {
	public departmentId;
	public name;
	public gender;
	public dept;
	public number;


	constructor(private route: ActivatedRoute){}

	ngOnInit(){

		let id = this.route.snapshot.params['id'];
		this.departmentId = id;
		
		// this.route.queryParams.subscribe((p: any) => {
		// 	if(id){
		// 	    if (p.filter){
		// 	        console.log(JSON.parse(p.filter));
		// 	        this.name = p.filter;
		// 	    }
		// 	}
		// });

		this.route.queryParams.subscribe(params => {
            this.name = params["name"];
            this.gender = params["gender"];
            this.dept = params["dept"];
            this.number = params["num"];
        });


		 // let id = this.route.snapshot.params['id'];
		 // this.departmentId = id;


		// let name = this.route.snapshot.data['name'];
		// console.log("Data via params: ",this.route.snapshot.data['name']);
		// this.name = name;
	}
}