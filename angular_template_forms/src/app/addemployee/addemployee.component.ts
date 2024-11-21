import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-addemployee',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './addemployee.component.html',
  styleUrl: './addemployee.component.css'
})
export class ADDEmployeeComponent {

  empDetails ={
    email: '',
    first_name: '',
    last_name: '',
    salary: '',
    department: ''
  }

  submitEmployee(emp_form:any){
    if(emp_form.form.status == 'VALID'){
      console.log(emp_form.form.value)
    }else{
      console.log('There are errors')
    }
  }
}
