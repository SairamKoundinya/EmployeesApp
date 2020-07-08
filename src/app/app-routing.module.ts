import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { ViewTableComponent } from './employees/view-table/view-table.component';
import { EmployeeEditComponent } from './employees/employee-edit/employee-edit.component';



const routes: Routes = [
  { path: '', redirectTo: '/employees', pathMatch: 'full' },
  { 
    path: 'employees',
    component: EmployeesComponent,
    children: [
      { path: '', component: ViewTableComponent }
    ]
  },
  { 
      path: '**', 
      redirectTo: '/employees'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
