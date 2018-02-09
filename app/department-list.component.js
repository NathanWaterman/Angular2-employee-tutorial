"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var employee_service_1 = require("./employee.service");
var router_1 = require("@angular/router");
var DepartmentListComponent = /** @class */ (function () {
    function DepartmentListComponent(_employeeService, router) {
        this._employeeService = _employeeService;
        this.router = router;
        this.departments = [];
    }
    DepartmentListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._employeeService.getDepartmentList()
            .subscribe(function (resDepartmentData) {
            _this.departments = resDepartmentData;
            console.log(_this.departments);
        }, function (resDepartmentError) {
            _this.errorMsg = resDepartmentError;
        });
    };
    DepartmentListComponent.prototype.onSelect = function (department) {
        var navigationExtras = {
            queryParams: {
                "name": department.name,
                "gender": department.gender,
                "dept": department.dept,
                "num": department.number,
            },
            //removes the data from the Url link
            skipLocationChange: true
        };
        this.router.navigate(['/departmentList', department.id], navigationExtras);
    };
    DepartmentListComponent = __decorate([
        core_1.Component({
            selector: 'department-list',
            templateUrl: 'app/app.department-list.html'
        }),
        __metadata("design:paramtypes", [employee_service_1.EmployeeService, router_1.Router])
    ], DepartmentListComponent);
    return DepartmentListComponent;
}());
exports.DepartmentListComponent = DepartmentListComponent;
//# sourceMappingURL=department-list.component.js.map