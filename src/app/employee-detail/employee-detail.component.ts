import { Component, OnInit, Input } from '@angular/core';

import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

	@Input() employee: Employee;

	constructor(private employeeService: EmployeeService) { }

	ngOnInit(): void {

	}

	save(): void {
		this.employeeService.updateEmployee(this.employee);
	}

}
