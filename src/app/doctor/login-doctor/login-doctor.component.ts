import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Import FormBuilder and Validators
import { LoginDoctorService } from './login-doctor.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router'; // Import the Router service
import { SessionServiceService } from 'src/app/session-service/session-service.service';

@Component({
  selector: 'app-login-doctor',
  templateUrl: './login-doctor.component.html',
  styleUrls: ['./login-doctor.component.css']
})
export class LoginDoctorComponent {
  loginForm: FormGroup; // Define a FormGroup to manage the form

  constructor(
    private formBuilder: FormBuilder,
    private loginDoctorService: LoginDoctorService,
    private router: Router,// Inject the Router service
    private sessionService : SessionServiceService
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  public onSubmit(): void {
    if (this.loginForm.valid) {
      this.loginDoctorService.logDoctor(this.loginForm.value).subscribe(
        (response: any) => {
          // Handle successful login here
          console.log('Login successful:', response);
          // After successful login
          this.sessionService.setDoctorId(response.id);
          console.log(this.sessionService.getDoctorId())

          // Assuming you want to navigate to some dashboard after successful login
          this.router.navigate(['/doctors/dashboard']);
        },
        (error: HttpErrorResponse) => {
          // Handle login error here
          console.error('Login error:', error);
          // Display an alert or error message
          alert('Login failed. Please check your credentials.');
        }
      );
    }
  }
}

