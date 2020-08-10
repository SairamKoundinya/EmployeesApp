import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeEditComponent } from './employees/employee-edit/employee-edit.component';


import { AngularMaterialModule } from './material/material.module';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';  
import { DataApiService } from './inmemorywebapi/data-api.service';
import { CustomcurrencyPipe } from './employees/pipes/customcurrency.pipe';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeEditComponent,
    
    CustomcurrencyPipe,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    AngularMaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    InMemoryWebApiModule.forRoot(DataApiService)
  ],
  entryComponents: [EmployeeEditComponent],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
