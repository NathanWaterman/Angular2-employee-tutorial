import { Component, OnInit} from '@angular/core';
import { EmployeeService } from './employee.service';
import { Router, NavigationExtras } from '@angular/router';


@Component({
  selector: 'department-list',
  templateUrl: 'app/app.department-list.html'
})

export class DepartmentListComponent implements OnInit{
	departments = [];
	errorMsg: string;

	constructor(private _employeeService: EmployeeService, private router: Router){}

	ngOnInit(){
		this._employeeService.getDepartmentList()
		.subscribe(resDepartmentData => {
			this.departments = resDepartmentData;
			console.log(this.departments);
		}, resDepartmentError => {
			this.errorMsg = resDepartmentError;
		});
	}

	onSelect(department){
		let navigationExtras: NavigationExtras = {
			queryParams: {
		        "name" : department.name,
		        "gender" : department.gender,
		        "dept" : department.dept,
		        "num" : department.number,
		    },
		    //removes the data from the Url link
		    skipLocationChange: true
		}
		this.router.navigate(['/departmentList', department.id], navigationExtras);
	}
}