import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()

export class EmployeeService{

	private _url1: string = "assets/apidata/employeedata.json"

	private _url2: string = "assets/apidata/employeedata2.json"

	private _url3: string = "assets/apidata/departmentListdata.json"

	constructor(private _http: Http){}
	//get employees One
	getEmployees(){
		return this._http.get(this._url1)
			   .map((response:Response) => response.json())
			   .catch(this._errorHandler1);
	}
	_errorHandler1(error: Response){
		console.error(error);
		return Observable.throw(error || "Server Error 1");
	}
	//get employees Two
	getEmployees2(){
		return this._http.get(this._url2)
			   .map((response:Response) => response.json())
			   .catch(this._errorHandler2);
	}
	_errorHandler2(error: Response){
		console.error(error);
		return Observable.throw(error || "Server Error");
	}
	//get department List
	getDepartmentList(){
		return this._http.get(this._url3)
			   .map((response:Response) => response.json())
			   .catch(this._errorHandler3);
	}
	_errorHandler3(error: Response){
		console.error(error);
		return Observable.throw(error || "Server Error");
	}
}