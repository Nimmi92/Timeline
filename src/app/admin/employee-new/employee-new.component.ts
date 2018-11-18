import { Component, Input, OnInit } from '@angular/core';
import { EmployeeListService } from "../employee-list/employee-list.service";
import { FormBuilder, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';


@Component({
  selector: 'employee-new',
  templateUrl: './employee-new.component.html',
  styleUrls: ['./employee-new.component.css']
})
export class EmployeeNewComponent implements OnInit {

  employeeForm: FormGroup;

  constructor(private employeeListService: EmployeeListService, private fb: FormBuilder) { 
    let self = this;
    let employeeList =[];
    this.employeeForm = this.fb.group({
     id: ['', [this.uniqueIdValidator.bind(this)]],
     name: ['', [Validators.required]],
     username: ['', [this.userNameValidator.bind(this)]],
     phone: ['', [this.uniquePhoneValidator.bind(this)]],
     role: ['', [Validators.required]],
    });
  }

  ngOnInit() {
     this.employeeListService.listSource.subscribe({
      next: (updatedList) => {this.employeeList = updatedList}
    });
  } 

  userNameValidator(control: AbstractControl) {
    if(control && (control.value !== null || control.value !== undefined)) {
      const regex = new RegExp(/[\w-_]+/);
      if(!regex.test(control.value)) {
        return {
          isError : true
        };
      }
    }
    return null;
  }

  uniqueIdValidator(control: AbstractControl) {
     let getEmployeeList = [];
     let empIds=[];
     this.employeeListService.listSource.subscribe({
      next: (updatedList) => {
      this.getEmployeeList = updatedList;
      this.getEmployeeList.forEach((emp,i) => {
        empIds.push(emp.id);
      })
      }
    });

    if(control && (control.value !== null || control.value !== undefined)) {
      const regex = new RegExp('^[0-9]*');
      if(!regex.test(control.value)) {
        console.log("error")
        return {
          isError : true
        };
      }
      else {   
        if(empIds.indexOf(control.value) > -1) {
          return {
            isError : true
          };
        }
      }
    }
    return null;
  }

  uniquePhoneValidator(control: AbstractControl) {
     let getEmployeeList = [];
     let empPhones=[];
     this.employeeListService.listSource.subscribe({
      next: (updatedList) => {
      this.getEmployeeList = updatedList;
      this.getEmployeeList.forEach((emp,i) => {
        empPhones.push(emp.phone);
      })
      }
    });

    if(control && (control.value !== null || control.value !== undefined)) {
      const regex = new RegExp('^[0-9]*');
      if(!regex.test(control.value)) {
        return {
          isError : true
        };
      }
      else {   
        if(empPhones.indexOf(control.value) > -1) {
          return {
            isError : true
          };
        }
      }
    }
    return null;
  }

  submitEmployeeDetails() {
    this.employeeListService.addEmployee(this.employeeForm.value)
  }
}
