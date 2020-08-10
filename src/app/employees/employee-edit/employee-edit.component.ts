import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {
  
  ngOnInit(): void {
  }

  error = 'You must enter a value';
  addoredit = '';
  
  columns = [];
  return =  {};
  

  constructor( public dialogRef: MatDialogRef<EmployeeEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

      for(var col of data.columns)
      {
        this.columns.push(new column(col, new FormControl('', [Validators.required])));
      }
       this.addOrEditInit(data.edit);
     }
  
  addOrEditInit( data: any)
  {
    if(data.id)
    {
          this.addoredit = 'Edit';
    }
    else{
      this.addoredit = 'Add';
    }
  }
  

  addEdit(): void {

    for(var field of this.columns)
    {
      this.return[field.name] = this.data.edit[field.name];
    }
    this.return['id'] = this.data.edit['id'];
    
    this.dialogRef.close(this.return);
  
  }
  
  cancel(): void {
    this.dialogRef.close("cancelled");
  }
}

export class column
{
   public name: string;
   public valid: any;

   constructor(name: string, valid: any)
   {
      this.name = name;
      this.valid = valid;    
   }  
}