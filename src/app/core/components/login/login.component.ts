import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user';
import { AuthService } from 'src/app/shared/services/auth.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService]
})
export class LoginComponent {
  constructor(
    private formbuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private messageService: MessageService
  ) {}

  logInForm!: FormGroup;
  formData!: User;

  ngOnInit(): void {
    this.logInForm = this.formbuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  loginUser() {
    //If not valid, stops here
    if (!this.logInForm.valid) return alert('Form is invalid.');

    this.authService.loginUser(this.logInForm.value).subscribe(
      (response) => {
        console.log(response);
        if(response.role === "admin"){
          this.router.navigate(['/addAdmin']);
        }else{
          this.router.navigate(['/home']);
        }


      
      },
      (error) => {
        if(error.status === 401){
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Invalid Credentials' });
        }else{
          console.log(error)
        }
      }
    );
  }

}
