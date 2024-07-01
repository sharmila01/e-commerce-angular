import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../../models/customer-models/user.model';
import { AuthService } from '../../../services/customer-services/auth.service';
import { CommonModule } from '@angular/common';

interface RegisterData extends User {}

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  imports: [CommonModule,ReactiveFormsModule]
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup ;
  registrationError: string = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, this.matchPasswordValidator.bind(this)]]
    });
  }

  ngOnInit(): void {
  
  }

  matchPasswordValidator(control: AbstractControl): { [key: string]: boolean } | null {
    if (!this.registerForm) return null;

    const password = this.registerForm.get('password')?.value;
    if (control.value !== password) {
      return { passwordsDontMatch: true };
    }
    return null;
  }

  onSubmit(): void {
    if (this.registerForm.invalid) return;

    const formData: RegisterData = this.registerForm.value; // FormGroup is now guaranteed to be initialized

    this.authService.register(formData)
      .subscribe(
        () => {
          // Handle successful registration (e.g., redirect to login)
          this.router.navigate(['/login']);
        },
        (error) => {
          this.registrationError = error.message; // Handle registration error appropriately
        }
      );
  }
}
