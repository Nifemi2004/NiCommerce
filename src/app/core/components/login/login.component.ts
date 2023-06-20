import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private formbuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
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
        this.router.navigate(['/home']);
      },
      (error: any) => console.log(error)
    );
    console.log(JSON.stringify(this.logInForm.value));
  }


}
