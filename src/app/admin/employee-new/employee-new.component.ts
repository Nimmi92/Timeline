import { Component, Input, OnInit } from '@angular/core';
import { EmployeeListService } from "../employee-list/employee-list.service";
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';


@Component({
  selector: 'employee-new',
  templateUrl: './employee-new.component.html',
  styleUrls: ['./employee-new.component.css']
})
export class EmployeeNewComponent implements OnInit {
  constructor(private employeeList: EmployeeListService, private fb: FormBuilder) { }
    employeeForm = this.fb.group({
    id: ['', Validators.required],
    name: ['', Validators.required],
    username: ['', Validators.required],
    phone: ['', Validators.required],
    role: ['', Validators.required],
  })

  ngOnInit() {
 
  }

  submitEmployeeDetails() {
    this.employeeList.addEmployee(this.employeeForm.value)
  }
}
