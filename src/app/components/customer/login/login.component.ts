import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/customer-services/auth.service';
import { CommonModule } from '@angular/common';
import { LoginData } from '../../../models/customer-models/login.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginError: string = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {
   
  }

  onSubmit() {
    const loginData: LoginData = this.loginForm.value;

    this.authService.login(loginData)
      .subscribe(
        (response) => {
          // Handle successful login (e.g., store token, redirect)
          console.log('Login successful!', response);
          this.router.navigate(['/']); // Replace with your desired route after login
        },
        (error) => {
          this.loginError = error.message; // Handle login error appropriately
        }
      );
  }
}
