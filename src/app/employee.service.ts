import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

	private employeesUrl = '/employees';
  private url = 'http://localhost:8000/api';

	httpOptions = {headers: new HttpHeaders({ 'Content-type': 'application/json' })};

	constructor(private http: HttpClient) { }

	getEmployees(): Observable<Employee[]> {
		return this.http.get<Employee[]>(this.url + this.employeesUrl);
	}

	updateEmployee(employee: Employee): Observable<Employee[]> {
		this.http.put(this.url + this.employeesUrl + '/' + employee.id, employee, this.httpOptions).subscribe();
    return this.getEmployees();
	}

	addEmployee(employee: Employee): Observable<Employee> {
		return this.http.post<Employee>(this.url + this.employeesUrl, employee, this.httpOptions);
	}

	deleteEmployee(employee: number) {
		const url = `${this.url+this.employeesUrl}/${employee}`;
    this.http.delete(url, this.httpOptions).subscribe();
	}
}
