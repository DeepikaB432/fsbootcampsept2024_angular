import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  imports: [FormsModule,RouterModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  
  dataService:DataService = inject(DataService);
  router:Router = inject(Router);

  signInDetails ={
    email: '',
    password:''
  }

  signIn(data:any){
    if(data.form.valid){
      this.dataService.login(data.form.value).subscribe((result:any) => {
        if(result.status == 'success'){
          // console.log("token",result.token)
          localStorage.setItem('token',result.token);
          this.router.navigate(['home']);
        }
      })
    }
  }
}
