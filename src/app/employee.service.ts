import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

	private url = 'https://employeewebappapi.herokuapp.com/api/employees';

	httpOptions = {headers: new HttpHeaders({ 'Content-type': 'application/json' })};

	constructor(private http: HttpClient) { }

	getEmployees(): Observable<Employee[]> {
		return this.http.get<Employee[]>(this.url);
	}

	updateEmployee(employee: Employee): Observable<Employee[]> {
		this.http.patch(this.url + '/' + employee.id, employee, this.httpOptions).subscribe();
    return this.getEmployees();
	}

	addEmployee(employee: Employee): Observable<Employee> {
		return this.http.post<Employee>(this.url, employee, this.httpOptions);
	}

	deleteEmployee(employee: number) {
		const url = `${this.url}/${employee}`;
		this.http.delete(url, this.httpOptions).subscribe();
	}
}
