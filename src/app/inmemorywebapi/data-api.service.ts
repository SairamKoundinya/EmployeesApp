import { Injectable, Injector } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  
  createDb(){

   let  employees =  [{id:1,Name:"Saikumar mangi",Salary:320800.00,Age:61, Place:"Hyd"},
   {id:2,Name:"Mohd Waheed",Salary:170750.5,Age:63, Place:"Hyd"},
   {id:3,Name:"Harshith Beera",Salary:86000,Age:66, Place:"Hyd"},
   {id:4,Name:"Saharsh pamula",Salary:433060,Age:22, Place:"Hyd"},
   {id:5,Name:"Mohd Ali",Salary:162700,Age:33, Place:"Hyd"},
   {id:6,Name:"Raghu goud",Salary:372000,Age:61, Place:"Hyd"},
   {id:7,Name:"Kangana r",Salary:137500,Age:59, Place:"Hyd"},
   {id:8,Name:"Radhe jaggi",Salary:327900,Age:55, Place:"Hyd"},
   {id:9,Name:"Moses samson",Salary:205500,Age:39, Place:"Hyd"},
   {id:10,Name:"Arish rahil",Salary:103600,Age:23, Place:"Hyd"},
   {id:11,Name:"Sai kiran",Salary:90560,Age:30, Place:"Hyd"},
   {id:12,Name:"Vasudev",Salary:342000,Age:22, Place:"Hyd"}
   ];



    return {employees};
  }
}
