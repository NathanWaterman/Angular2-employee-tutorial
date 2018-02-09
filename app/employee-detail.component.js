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
var d3 = require("d3-selection");
var d3Scale = require("d3-scale");
var d3Shape = require("d3-shape");
var d3Array = require("d3-array");
var d3Axis = require("d3-axis");
var data_1 = require("./shared/data");
var EmployeeDetailComponent = /** @class */ (function () {
    function EmployeeDetailComponent(_employeeService) {
        this._employeeService = _employeeService;
        this.employees = [];
        this.title = 'D3.js with Angular 2!';
        this.subtitle = 'Line Chart';
        this.margin = { top: 20, right: 20, bottom: 30, left: 50 };
        this.width = 900 - this.margin.left - this.margin.right;
        this.height = 500 - this.margin.top - this.margin.bottom;
    }
    EmployeeDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        //dynamically read in external JSON from service
        this._employeeService.getEmployees2()
            .subscribe(function (resEmployeeData) { return _this.employees = resEmployeeData; }, function (resEmployeeError) { return _this.errorMsg = resEmployeeError; });
        this.initSvg();
        this.initAxis();
        this.drawAxis();
        this.drawLine();
    };
    EmployeeDetailComponent.prototype.initSvg = function () {
        this.svg = d3.select("svg")
            .append("g")
            .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");
    };
    EmployeeDetailComponent.prototype.initAxis = function () {
        this.x = d3Scale.scaleTime().range([0, this.width]);
        this.y = d3Scale.scaleLinear().range([this.height, 0]);
        this.x.domain(d3Array.extent(data_1.Stocks, function (d) { return d.date; }));
        this.y.domain(d3Array.extent(data_1.Stocks, function (d) { return d.value; }));
    };
    EmployeeDetailComponent.prototype.drawAxis = function () {
        this.svg.append("g")
            .attr("class", "axis axis--x")
            .attr("transform", "translate(0," + this.height + ")")
            .call(d3Axis.axisBottom(this.x));
        this.svg.append("g")
            .attr("class", "axis axis--y")
            .call(d3Axis.axisLeft(this.y))
            .append("text")
            .attr("class", "axis-title")
            .attr("transform", "rotate(-90)")
            .attr("y", 6)
            .attr("dy", ".71em")
            .style("text-anchor", "end")
            .text("Price ($)");
    };
    EmployeeDetailComponent.prototype.drawLine = function () {
        var _this = this;
        this.line = d3Shape.line()
            .x(function (d) { return _this.x(d.date); })
            .y(function (d) { return _this.y(d.value); });
        this.svg.append("path")
            .datum(data_1.Stocks)
            .attr("class", "line")
            .attr("d", this.line);
    };
    EmployeeDetailComponent = __decorate([
        core_1.Component({
            selector: 'employee-detail',
            template: "<h2>Employee Details</h2>\n  \t\t\t\t<h3>{{errorMsg}}</h3>\n\t\t\t<ul *ngFor=\"let employee of employees\">\n\t\t\t\t<li>{{employee.id}} - {{employee.name}} - {{employee.gender}}</li>\n\t\t\t</ul>\n\n\t\t\t<h1>{{title}}</h1>\n\t\t\t <h2>{{subtitle}}</h2>\n\t\t\t<svg width=\"960\" height=\"500\"></svg>\n\n\t\t\t"
        }),
        __metadata("design:paramtypes", [employee_service_1.EmployeeService])
    ], EmployeeDetailComponent);
    return EmployeeDetailComponent;
}());
exports.EmployeeDetailComponent = EmployeeDetailComponent;
//# sourceMappingURL=employee-detail.component.js.map