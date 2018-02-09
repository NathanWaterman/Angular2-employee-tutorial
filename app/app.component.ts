import { Component } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'my-app',
  template: `<h1>Random Company</h1>
  			 <nav>
  			 	<a routerLink="/employeeDetail" routerLinkActive="active">Employee Detail</a>
  			 	<a routerLink="/employeesList" routerLinkActive="active">Employees List</a>
  			 	<a routerLink="/departmentList" routerLinkActive="active">Department List</a>
  			 </nav>
  			 <router-outlet></router-outlet>
  			 `,
  providers: [EmployeeService]

  
})
export class AppComponent { }
