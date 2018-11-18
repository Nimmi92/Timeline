import { Injectable, Inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LOCAL_STORAGE, StorageService } from 'angular-webstorage-service';

@Injectable()
export class EmployeeListService {

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { console.log(storage)} 

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

  storage.set('employeeList', this.employeeList);
  private employeeListFromLocalStorage = storage.get('employeeList');
  console.log("from LOCALSTORAGE");
  console.log(this.employeeListFromLocalStorage);

  private defaultEmployee = 'Maria';
  private isOpen = false;

  private listSource = new BehaviorSubject(this.employeeList);
  currentList = this.listSource.asObservable();

  private modalState = new BehaviorSubject(this.isOpen);
  modalState = this.modalState.asObservable();

  

  addEmployee(employee) {
  	let self = this;
  	let employeeList = self.employeeList;
  	let newEmployeeId = employeeList[employeeList.length-1].id + 1;
  	let newEmployee = {
  		"id": employee.name,
  		"name": employee.name,
      "username": employee.username,
      "phone": employee.phone,
  		"role": employee.role
  	}
    employeeList.push(newEmployee)
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
  }

  showModal(id) {
    let isOpen = self.isopen
    isOpen = true;
   
  }

}