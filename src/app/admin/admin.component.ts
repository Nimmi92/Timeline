import { Component, OnInit } from '@angular/core';
import { EmployeeListService } from "./employee-list/employee-list.service";

@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
	isOpen: boolean;
  constructor(private employeeList: EmployeeListService) { 
  	
  }
  
  ngOnInit() {
    this.employeeList.modalState.subscribe(isOpen => {
    this.isOpen = isOpen;
    console.log("admin ts");
    console.log(this.isOpen);
    })
  }

}
