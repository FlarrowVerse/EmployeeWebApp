import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Employee } from './employee';

import json from '../assets/employee-data.json';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

	createDb() {
		const employees = json;

		return {employees};
	}

	constructor() { }
}
