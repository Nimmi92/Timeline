import { Component, OnInit } from '@angular/core';
import { EmployeeListService } from "./employee-list.service";

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  constructor(private employeeListService: EmployeeListService) { 
  	
  }

  ngOnInit() {
    this.employeeListService.listSource.subscribe({
      next: (updatedList) => {this.employeeList = updatedList}
    })
  }
}
