import { Component,inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})
export class EmployeesComponent {

  router = inject(ActivatedRoute);

  details: string = '';

  employees = [
    {id:1, name:'Deepika',description: 'Deepika is a Developer'},
    {id:2, name:'Sam',description:'Sam is a manager'},
    {id:3, name:'George',description: 'George is the HR'}
  ]

  constructor(){
    this.router.paramMap.subscribe((param)=>{
      const emp_id = param.get('id')
      if(emp_id){
        const employee = this.employees.find(e => {
          if(e.id == parseInt(emp_id)){
            return e;
          }else{
            return null;
          }
        })
        if(employee){
          this.details = employee.description;
        }else{
          this.details = '';
        }
      }
    });
  }
}
