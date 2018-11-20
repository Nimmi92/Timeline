import { Component, Input, OnInit } from '@angular/core';
import { EmployeeListService } from "../employee-list/employee-list.service";
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
	@Input() employee;
  
  isEditing: boolean;

  constructor(private employeeListService: EmployeeListService, private fb: FormBuilder) {
  	let isEditing = false;
  }

  employeeEditForm = this.fb.group({
    name: ['', Validators.required],
    username: ['', Validators.required],
    phone: ["", Validators.required],
    role: ["", Validators.required],
  })

  ngOnInit() {
     
  }

  editEmployee(id) {
    this.isEditing = true;
  }

  cancelEmployee(id) {
    this.isEditing = false;
  }

  saveEmployee(id,employee) {
  	this.isEditing = false;
    this.employeeListService.saveEmployee(id,this.employeeEditForm.value);
  }

  deleteEmployee(id) {
    this.employeeListService.deleteEmployee(id);
  }
}
