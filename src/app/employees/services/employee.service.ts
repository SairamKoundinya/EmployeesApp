import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Employees } from '../models/employee.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EmployeeService {
  employeesChanged = new Subject<Employees[]>();


  SERVER_URL: string = "http://localhost:8080/api/";
  constructor(private httpClient: HttpClient) { }

  public getEmployees(){ 
       return this.httpClient.get(this.SERVER_URL + 'employees');
  }

  public createEmployee(employee: Employees){
      return this.httpClient.post(`${this.SERVER_URL + 'employees'}`, employee);
  }

  public deleteEmployee(employeeId){
      return this.httpClient.delete(`${this.SERVER_URL + 'employees'}/${employeeId}`);
  }
  public updateEmployee(employee: Employees){
      return this.httpClient.put(`${this.SERVER_URL + 'employees'}/${employee.id}`, employee)
  }

}
