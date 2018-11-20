import { Component, OnInit } from '@angular/core';
import { EmployeeListService } from "./employee-list/employee-list.service";

@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  constructor(private employeeListService: EmployeeListService) { 
  	
  }
  
  ngOnInit() {
  }

}
