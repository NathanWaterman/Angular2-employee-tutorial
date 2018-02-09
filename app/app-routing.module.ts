import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list.component';
import { EmployeeDetailComponent } from './employee-detail.component';
import { DepartmentListComponent } from './department-list.component';
import { DepartmentDetailComponent } from './department-detail.component';

const routes: Routes = [
	  	//default view (uses employee details view)
	    {path: '', component: EmployeeDetailComponent},
	    //employee details view
	  	{path: 'employeeDetail', component: EmployeeDetailComponent},
	  	//employee list view
	  	{path: 'employeesList', component: EmployeeListComponent},
	  	//department list view
	  	{path: 'departmentList', component: DepartmentListComponent},
	  	//department detail view by id
	  	{path: 'departmentList/:id', component: DepartmentDetailComponent}
	  ];


@NgModule({
	imports: [
		RouterModule.forRoot(routes)
	],
	exports: [
		RouterModule
	]
})


export class AppRoutingModule {}
export const routingComponents = [EmployeeDetailComponent, EmployeeListComponent, DepartmentListComponent, DepartmentDetailComponent]