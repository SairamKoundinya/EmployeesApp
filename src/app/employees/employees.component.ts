import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Employees } from './models/employee.model';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';



@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent<T> implements OnInit {


  @Input('options') options: any;
  @Input('model') model: { new (): T; };
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<T>;
  dataSource: MatTableDataSource<T>;
  
  constructor(private http: HttpClient, public dialog: MatDialog){}

  columnsNames = [];
  displayedColumns = [];

   
  ngOnInit() {
    
   
    for(var col of this.options.dataTableOptions.Columns)
    {
        this.columnsNames.push(col.name);
        this.displayedColumns.push(col.name);
    }
    this.displayedColumns.push('actions');
    this.makeTable();  
  }

  addDialog()
  {
    this.openDialog({id: undefined});
  }

  editDialog(employees: T) {
    this.openDialog(employees);
  }

  openDialog(dat: any) {
    const dialogRef = this.dialog.open(EmployeeEditComponent, {
      data: {
        edit: dat,
        columns: this.columnsNames
      }
    });

    dialogRef.afterClosed().subscribe(result => {

      if(result === 'cancelled')
      {
          console.log("Dialog closed");
      }
      else if(result.id)
      {
        this.http.put(`${this.options.BaseAPIUrl + this.options.edit}/${result.id}`, result).subscribe((ret)=>{
          this.makeTable();
          this.options.events.edited();
       });
      }
      else{
        this.http.post(`${this.options.BaseAPIUrl + this.options.add}`, result).subscribe((ret)=>{
          this.makeTable();
          this.options.events.added();
       });
      }
    });
  }



  deleteEmployee( id: number) {
   
    this.http.delete(`${this.options.BaseAPIUrl + this.options.delete}/${id}`).subscribe((ret)=>{
      this.makeTable();
      this.options.events.deleted();
    })
  }
 

  makeTable()
  {
    this.http.get( this.options.BaseAPIUrl + this.options.Get).subscribe((data : T[])=>{
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
