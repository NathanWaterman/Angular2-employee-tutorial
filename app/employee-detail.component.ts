import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';

import * as d3 from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Shape from 'd3-shape';
import * as d3Array from 'd3-array';
import * as d3Axis from 'd3-axis';

import { Stocks } from './shared/data';

@Component({
  selector: 'employee-detail',
  template: `<h2>Employee Details</h2>
  				<h3>{{errorMsg}}</h3>
			<ul *ngFor="let employee of employees">
				<li>{{employee.id}} - {{employee.name}} - {{employee.gender}}</li>
			</ul>

			<h1>{{title}}</h1>
			 <h2>{{subtitle}}</h2>
			<svg width="960" height="500"></svg>

			`
})

export class EmployeeDetailComponent implements OnInit{
	employees = [];
	errorMsg: string;

	title: string = 'D3.js with Angular 2!';
	  subtitle: string = 'Line Chart';

	  private margin = {top: 20, right: 20, bottom: 30, left: 50};
	  private width: number;
	  private height: number;
	  private x: any;
	  private y: any;
	  private svg: any;
	  private line: d3Shape.Line<[number, number]>;



	constructor(private _employeeService: EmployeeService){
		this.width = 900 - this.margin.left - this.margin.right;
    	this.height = 500 - this.margin.top - this.margin.bottom;
	}

	ngOnInit(){
		//dynamically read in external JSON from service
		this._employeeService.getEmployees2()
		.subscribe(resEmployeeData => this.employees = resEmployeeData, resEmployeeError => this.errorMsg = resEmployeeError);

		this.initSvg();
	    this.initAxis();
	    this.drawAxis();
	    this.drawLine();
	}

	private initSvg() {
    this.svg = d3.select("svg")
                 .append("g")
                 .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");
	  }

	  private initAxis() {
	    this.x = d3Scale.scaleTime().range([0, this.width]);
	    this.y = d3Scale.scaleLinear().range([this.height, 0]);
	    this.x.domain(d3Array.extent(Stocks, (d) => d.date ));
	    this.y.domain(d3Array.extent(Stocks, (d) => d.value ));
	  }

	  private drawAxis() {

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
	  }

	  private drawLine() {
	    this.line = d3Shape.line()
	                       .x( (d: any) => this.x(d.date) )
	                       .y( (d: any) => this.y(d.value) );

	    this.svg.append("path")
	            .datum(Stocks)
	            .attr("class", "line")
	            .attr("d", this.line);
	  }
}