import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

	private employeesUrl = 'api/employees';

	httpOptions = {headers: new HttpHeaders({ 'Content-type': 'application/json' })};

	constructor(private http: HttpClient) { }

	getEmployees(): Observable<Employee[]> {
		return this.http.get<Employee[]>(this.employeesUrl);
	}

	updateEmployee(employee: Employee): Observable<any> {
		return this.http.put(this.employeesUrl, employee, this.httpOptions);
	}

	addEmployee(employee: Employee): Observable<Employee> {
		return this.http.post<Employee>(this.employeesUrl, employee, this.httpOptions);
	}

	deleteEmployee(employee: Employee | number) {
		console.log("Deleted " + employee);		
	}
}
