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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/observable/throw");
var EmployeeService = /** @class */ (function () {
    function EmployeeService(_http) {
        this._http = _http;
        this._url1 = "assets/apidata/employeedata.json";
        this._url2 = "assets/apidata/employeedata2.json";
        this._url3 = "assets/apidata/departmentListdata.json";
    }
    //get employees One
    EmployeeService.prototype.getEmployees = function () {
        return this._http.get(this._url1)
            .map(function (response) { return response.json(); })
            .catch(this._errorHandler1);
    };
    EmployeeService.prototype._errorHandler1 = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error || "Server Error 1");
    };
    //get employees Two
    EmployeeService.prototype.getEmployees2 = function () {
        return this._http.get(this._url2)
            .map(function (response) { return response.json(); })
            .catch(this._errorHandler2);
    };
    EmployeeService.prototype._errorHandler2 = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error || "Server Error");
    };
    //get department List
    EmployeeService.prototype.getDepartmentList = function () {
        return this._http.get(this._url3)
            .map(function (response) { return response.json(); })
            .catch(this._errorHandler3);
    };
    EmployeeService.prototype._errorHandler3 = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error || "Server Error");
    };
    EmployeeService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], EmployeeService);
    return EmployeeService;
}());
exports.EmployeeService = EmployeeService;
//# sourceMappingURL=employee.service.js.map