import { Component, OnInit } from '@angular/core';
import { EmployeeListService } from "./employee-list.service";

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  constructor(private employeeList: EmployeeListService) { 
  	
  }

  ngOnInit() {
    this.employeeList.currentList.subscribe(employeeList => {
    	this.employeeList = employeeList
    })
  }
}
