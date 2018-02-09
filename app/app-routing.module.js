"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var employee_list_component_1 = require("./employee-list.component");
var employee_detail_component_1 = require("./employee-detail.component");
var department_list_component_1 = require("./department-list.component");
var department_detail_component_1 = require("./department-detail.component");
var routes = [
    //default view (uses employee details view)
    { path: '', component: employee_detail_component_1.EmployeeDetailComponent },
    //employee details view
    { path: 'employeeDetail', component: employee_detail_component_1.EmployeeDetailComponent },
    //employee list view
    { path: 'employeesList', component: employee_list_component_1.EmployeeListComponent },
    //department list view
    { path: 'departmentList', component: department_list_component_1.DepartmentListComponent },
    //department detail view by id
    { path: 'departmentList/:id', component: department_detail_component_1.DepartmentDetailComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot(routes)
            ],
            exports: [
                router_1.RouterModule
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
exports.routingComponents = [employee_detail_component_1.EmployeeDetailComponent, employee_list_component_1.EmployeeListComponent, department_list_component_1.DepartmentListComponent, department_detail_component_1.DepartmentDetailComponent];
//# sourceMappingURL=app-routing.module.js.map