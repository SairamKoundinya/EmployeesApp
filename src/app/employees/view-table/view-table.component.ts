import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

import { Employees } from '../models/employee.model';
import { EmployeeEditComponent } from '../employee-edit/employee-edit.component';
import { EmployeeService } from '../services/employee.service';


export interface ViewTableItem {
  id: number;
  employee_name: string;
  employee_salary: number;
  employee_age: number;
}

@Component({
  selector: 'app-view-table',
  templateUrl: './view-table.component.html',
  styleUrls: ['./view-table.component.css']
})
export class ViewTableComponent implements /*AfterViewInit,*/ OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<ViewTableItem>;
  dataSource: MatTableDataSource<Employees>;
  
  constructor(private http: HttpClient, public dialog: MatDialog, private employeeService: EmployeeService){}

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['employee_name', 'employee_age', 'employee_salary', 'actions'];
   
  ngOnInit() {
    this.makeTable();
  }

  addDialog()
  {
    this.openDialog(Employees);
  }

  editDialog(employees: Employees) {
    this.openDialog(employees);
  }

  openDialog(dat: any) {
    const dialogRef = this.dialog.open(EmployeeEditComponent, {
      data: dat,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("Dialog closed callback: "+ result);
      this.makeTable();
    });
  }

  deleteEmployee( id: number) {
    this.employeeService.deleteEmployee(id).subscribe((ret)=>{
      console.log("Employee Deleted: "+ ret);
      this.makeTable();
    })
  }
 
  makeTable()
  {
    this.employeeService.getEmployees().subscribe((data : Employees[])=>{
      this.dataSource = new MatTableDataSource(data);
      this.features();
    })
  }

  features() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  search(value : String)
  {
      this.dataSource.filter = value.trim().toLowerCase();
  } 
}
 