import { Component, Input, OnInit } from '@angular/core';
import { EmployeeListService } from "../employee-list/employee-list.service";
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {
	@Input() employee;
  @Input() isopen;
  isEditing: boolean;
  console.log("emp");
  consoloe.log(employee);

  constructor(private employeeList: EmployeeListService, private fb: FormBuilder) {
  	let isEditing = false;
  }

  employeeEditForm = this.fb.group({
    name: ['', Validators.required],
    username: ['', Validators.required],
    phone: ["", Validators.required],
    role: ["", Validators.required],
  })

  ngOnInit() {
    this.employeeList.modalState.subscribe(isOpen => this.isOpen = isOpen)
  }

  cancelEdit(id) {
  	this.isEditing = false;
  }

  saveEmployee(id,employee) {
  	this.isEditing = false;
    this.employeeList.saveEmployee(id,this.employeeEditForm.value);
  }

}
