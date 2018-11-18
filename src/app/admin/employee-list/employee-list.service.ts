import { Injectable, Inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LOCAL_STORAGE, StorageService } from 'angular-webstorage-service';

@Injectable()
export class EmployeeListService {

  constructor(@Inject(LOCAL_STORAGE) private Storage: StorageService) { 
    private employeeList = [
    {
      "id": 1,
      "username": "Maria",
      "name": "Maria",
      "phone": 9897897889,
      "role" : "HR"
    },
    {
      "id": 2,
      "username" : "Nimmi",
      "name": "Nirmala",
      "phone": 588472889,
      "role" : "Front End Developer"
    }
  ];

  Storage.set('employeeList', this.employeeList);
  private employeeListFromLocalStorage = Storage.get('employeeList');

  private defaultEmployee = 'Maria';
  private isOpen = false;

  private listSource = new BehaviorSubject(this.employeeListFromLocalStorage);
  currentList = this.listSource.asObservable();;

  private modalState = new BehaviorSubject(this.isOpen);
  modalState = this.modalState.asObservable();
  

  addEmployee(employee) {
  	let self = this;
  	let employeeList = self.employeeList;
  	let newEmployee = {
  		"id": employee.id,
  		"name": employee.name,
      "username": employee.username,
      "phone": employee.phone,
  		"role": employee.role
  	}
    employeeList.push(newEmployee)
    this.Storage.set('employeeList', employeeList);
    this.employeeListFromLocalStorage = this.Storage.get('employeeList');
    this.listSource.next(this.employeeListFromLocalStorage);
  }

  saveEmployee(id,employee) {
  	let self = this;
  	let employeeList = self.employeeList;
  	employeeList.map((emp,i) => {
  		if(emp.id === id) {
  			emp.name = employee.name;
        emp.username = employee.username;
        emp.phone = employee.phone;
        emp.role = employee.role;
  			employeeList[i] = emp;
        self.isOpen = false;
  			return employeeList;
  		}
  	})
  }

  deleteEmployee(id) {
  	let self = this;
  	let employeeList = self.employeeList;
  	employeeList.map((emp,i) => {
  		if(emp.id === id) {
  			employeeList.splice(i,1);
  			return employeeList;
  		}
  	})
    this.Storage.set('employeeList', employeeList);
    this.employeeListFromLocalStorage = this.Storage.get('employeeList');
    this.listSource.next(this.employeeListFromLocalStorage);
  }

  showModal(id) {
    let isOpen = self.isopen
    isOpen = true;
   
  }

  }
  

}