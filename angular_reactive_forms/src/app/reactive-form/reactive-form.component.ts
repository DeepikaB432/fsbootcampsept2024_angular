import { Component, inject } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ValidatePassword } from '../custom-password-validators';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css',
})
export class ReactiveFormComponent {
  emp_data: EmployeeService = inject(EmployeeService);
  route: ActivatedRoute = inject(ActivatedRoute);
  router: Router = inject(Router);

  emp: any = [];

  employeeForm = new FormGroup({
    employee_id: new FormControl(0),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      ValidatePassword,
    ]),
    first_name: new FormControl('', [Validators.required]),
    last_name: new FormControl(''),
    salary: new FormControl(''),
    department: new FormControl('', [Validators.required]),
  });

  addEmployee() {
    if (this.employeeForm.status == 'VALID') {
      if (this.employeeForm.value) {
        const empId = this.employeeForm.value.employee_id;
        if (empId && empId > 0) {
          console.log('Employee Updated');
          this.emp_data
            .updateEmployee(empId, this.employeeForm.value)
            .subscribe((result) => {
              this.router.navigate(['/employees']);
            });
        }else {
          //create employee request
          this.emp_data
            .createEmployee(this.employeeForm.value)
            .subscribe((result) => {
              console.log('Employee Added');
              this.router.navigate(['/employees/']);
            });
        }
      } 
    }
  }

  ngOnInit() {
    this.route.paramMap.subscribe((paramas) => {
      const emp_id = paramas.get('id');
      if (emp_id) {
        //var to tell its update
        const employee_id = parseInt(emp_id);
        this.emp_data.getEmployeesById(employee_id).subscribe((result: any) => {
          this.emp = result[0];
          if (result.length > 0) {
            this.employeeForm.patchValue({
              employee_id: employee_id,
              email: this.emp.email,
              password: this.emp.password,
              first_name: this.emp.first_name,
              last_name: this.emp.last_name,
              salary: this.emp.salary,
              department: this.emp.department_id,
            });
          }
        });
      }
    });
  }
}
