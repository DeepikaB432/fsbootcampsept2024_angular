import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [FormsModule,RouterModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  dataService:DataService=inject(DataService);
  router:Router=inject(Router);

  signUpDetails ={
    email: '',
    password: '',
    first_name: '',
    last_name: ''
  }

  signUp(data:any){
    console.log(data.form)
    if(data.form.valid){
      this.dataService.register(data.form.value).subscribe((result:any)=>{
        console.log(result)
        if(result.affectedRows>0){
          this.router.navigate(['signin']);
        }
      })
    }
  }
}
