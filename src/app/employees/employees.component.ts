import { Component, OnInit } from '@angular/core';

import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

    employees: Employee[] = [];
    selectedEmployee: Employee;
  

  	constructor(private employeeService: EmployeeService) { }

  	ngOnInit(): void {
  		this.getEmployees();
  	}

  	getEmployees(): void {
  		this.employeeService.getEmployees().subscribe(employees => this.employees = employees);
  	}

    onSelect(employee: Employee): void {
      this.selectedEmployee = employee;
    }

    add(id: Number, name: string) {
      name = name.trim();
      this.employeeService.addEmployee({ id, name } as Employee)
      .subscribe(employee => {
        this.employees.push(employee);
      });
    }

    delete(employee: Employee): void {
      this.employees = this.employees.filter(e => e !== employee);
      this.employeeService.deleteEmployee(employee);
    }

}
