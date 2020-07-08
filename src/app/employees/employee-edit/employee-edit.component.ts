import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Employees } from '../models/employee.model';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {
  
  ngOnInit(): void {
  }

  name = new FormControl('', [Validators.required]);
  age = new FormControl('', [Validators.required]);
  salary = new FormControl('', [Validators.required]);

  error = 'You must enter a value';
  addoredit = '';
  edit: boolean;

  constructor( public dialogRef: MatDialogRef<EmployeeEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Employees, private employeeService: EmployeeService) {
       this.addOrEditInit(data)
     }
  
  addOrEditInit( data: Employees)
  {
    if(data.id)
    {
          this.edit= true;
          this.addoredit = 'Edit';
    }
    else{
      this.edit= false;
      this.addoredit = 'Add';
    }
  }
  

  addEdit(): void {
    this.dialogRef.close();

    if(this.edit)
    {
      this.employeeService.updateEmployee({id:this.data.id,employee_name:this.data.employee_name,employee_age:this.data.employee_age,employee_salary:this.data.employee_salary}).subscribe((ret)=>{
        console.log("employee updated: ", ret);
      });
    }
    else{
    this.employeeService.createEmployee({id:null,employee_name:this.data.employee_name,employee_age:this.data.employee_age,employee_salary:this.data.employee_salary}).subscribe((ret)=>{
      console.log("employee created: ", ret);
    });
   }
  }
  
  cancel(): void {
    this.dialogRef.close();
  }
}
