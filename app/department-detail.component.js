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
var router_1 = require("@angular/router");
var DepartmentDetailComponent = /** @class */ (function () {
    function DepartmentDetailComponent(route) {
        this.route = route;
    }
    DepartmentDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.params['id'];
        this.departmentId = id;
        // this.route.queryParams.subscribe((p: any) => {
        // 	if(id){
        // 	    if (p.filter){
        // 	        console.log(JSON.parse(p.filter));
        // 	        this.name = p.filter;
        // 	    }
        // 	}
        // });
        this.route.queryParams.subscribe(function (params) {
            _this.name = params["name"];
            _this.gender = params["gender"];
            _this.dept = params["dept"];
            _this.number = params["num"];
        });
        // let id = this.route.snapshot.params['id'];
        // this.departmentId = id;
        // let name = this.route.snapshot.data['name'];
        // console.log("Data via params: ",this.route.snapshot.data['name']);
        // this.name = name;
    };
    DepartmentDetailComponent = __decorate([
        core_1.Component({
            template: "\n  \t\t\t <table style=\"width:100%; margin-top:150px\">\n\t\t\t  <tr>\n\t\t\t    <th>Your ID </th>\n\t\t\t    <th>Your Name</th> \n\t\t\t    <th>Your Gender</th>\n\t\t\t    <th>Your Department</th>\n\t\t\t    <th>Your Fav Number</th>\n\t\t\t  </tr>\n\t\t\t  <tr>\n\t\t\t    <td>{{departmentId}}</td>\n\t\t\t    <td>{{name}}</td> \n\t\t\t    <td>{{gender}}</td>\n\t\t\t    <td>{{dept}}</td>\n\t\t\t    <td>{{number}}</td>\n\t\t\t  </tr>\n\t\t\t</table>\n\n  \t\t\t"
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute])
    ], DepartmentDetailComponent);
    return DepartmentDetailComponent;
}());
exports.DepartmentDetailComponent = DepartmentDetailComponent;
//# sourceMappingURL=department-detail.component.js.map