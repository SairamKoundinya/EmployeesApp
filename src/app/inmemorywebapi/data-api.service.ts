import { Injectable, Injector } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  
  createDb(){

   let  employees =  [{id:1,employee_name:"Saikumar mangi",employee_salary:320800.00,employee_age:61},
   {id:2,employee_name:"Mohd Waheed",employee_salary:170750.5,employee_age:63},
   {id:3,employee_name:"Harshith Beera",employee_salary:86000,employee_age:66},
   {id:4,employee_name:"Saharsh pamula",employee_salary:433060,employee_age:22},
   {id:5,employee_name:"Mohd Ali",employee_salary:162700,employee_age:33},
   {id:6,employee_name:"Raghu goud",employee_salary:372000,employee_age:61},
   {id:7,employee_name:"Kangana r",employee_salary:137500,employee_age:59},
   {id:8,employee_name:"Radhe jaggi",employee_salary:327900,employee_age:55},
   {id:9,employee_name:"Moses samson",employee_salary:205500,employee_age:39},
   {id:10,employee_name:"Arish rahil",employee_salary:103600,employee_age:23},
   {id:11,employee_name:"Sai kiran",employee_salary:90560,employee_age:30},
   {id:12,employee_name:"Vasudev",employee_salary:342000,employee_age:22}
   ];

    return {employees};
  }
}
