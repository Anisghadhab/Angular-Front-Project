import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginDoctorService } from 'src/app/doctor/login-doctor/login-doctor.service';
import { SessionServiceService } from 'src/app/session-service/session-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginPatientForm: FormGroup; // Define a FormGroup to manage the form

  constructor(
    private formBuilder: FormBuilder,
    private loginDoctorService: LoginDoctorService,
    private router: Router,// Inject the Router service
    private sessionService : SessionServiceService
  ) {
    this.loginPatientForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }
  public onSubmit(): void {
    if (this.loginPatientForm.valid) {
      this.loginDoctorService.logPatient(this.loginPatientForm.value).subscribe(
        (response: any) => {
          // Handle successful login here
          console.log('Login successful:', response);
          // After successful login
          this.sessionService.setDoctorId(response.id);
          console.log(this.sessionService.getDoctorId())

          // Assuming you want to navigate to some dashboard after successful login
          this.router.navigate(['/']);
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
