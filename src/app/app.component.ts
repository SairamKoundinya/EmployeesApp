import { Component, Output, Input } from '@angular/core';
import { Employees } from './employees/models/employee.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {}

  ngOnInit(){}

   model: { new (): Employees; };

   options = {

    BaseAPIUrl: "http://localhost:8080/api/",
  
    Get: "employees", 
  
    edit: "employees",
  
    add: "employees",
  
    delete: "employees",
  
    dataTableOptions: {
  
  Columns:[
  
    {name: "Name", data: "employee_name" ,format:"text"},
  
   {name: "Age", data: "employee_age", format:"number"},
  
   {name: "Salary", data: "employee_salary",format:"amount" }
  
  ]   
  
    },
  
    events: {
  
      edited: function () {
        console.log("Employee Edited");
      },
  
      added: function () {
        console.log("Employee Added");
      },
  
      deleted: function () {
        console.log("Employee Deleted");
      },
  
    }
  
  }; 
}
