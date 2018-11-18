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
     id: ['', [this.uniqueIdValidator]],
     name: ['', [Validators.required]],
     username: ['', [Validators.required]],
     phone: ['', [Validators.required]],
     role: ['', [Validators.required]],
    });
  }

  ngOnInit() {
     this.employeeListService.listSource.subscribe({
      next: (updatedList) => {this.employeeList = updatedList}
    });
  }

  

  uniqueIdValidator(control: AbstractControl, this) {
    if(control && (control.value !== null || control.value !== undefined)) {
      const regex = new RegExp('^[0-9]*');
      if(!regex.test(control.value)) {
        console.log("error")
        return {
          isError : true
        };
      }
      else {   
        this.employeeList.map((emp,i) => {
          if(emp.id === control.value) {
            return {
              isError : true
            };
          }
        })
      }
    }
    return null;
  }

  submitEmployeeDetails() {
    this.employeeListService.addEmployee(this.employeeForm.value)
  }
}
