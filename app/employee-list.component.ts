import { Component, OnInit} from '@angular/core';
import { EmployeeService } from './employee.service';


@Component({
  selector: 'employee-list',
  templateUrl: 'app/app.employeeList.html'
})

export class EmployeeListComponent implements OnInit{
	employees = [];
	errorMsg: string;

	constructor(private _employeeService: EmployeeService){}

	ngOnInit(){
		this._employeeService.getEmployees()
		.subscribe(resEmployeeData => {
			this.employees = resEmployeeData;
			console.log(this.employees);
		}, resEmployeeError => {
			this.errorMsg = resEmployeeError;
		});
	}
}