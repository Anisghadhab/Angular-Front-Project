import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { ConsultationService } from './consultation.service';
import { Consultation } from './consultation';
import { HttpErrorResponse } from '@angular/common/http';
import { Doctor } from '../doctor/doctor';
import { DoctorService } from '../doctor/doctor.service';
@Component({
  selector: 'app-consultation-form',
  templateUrl: './consultation-form.component.html',
  styleUrls: ['./consultation-form.component.css']

})
export class ConsultationFormComponent {
  consultationForm: FormGroup;
  public doctor!: Doctor;

  constructor(private fb: FormBuilder, private consultationService: ConsultationService, private doctorService: DoctorService) {

    this.consultationForm = this.fb.group({
      status: ['pending', Validators.required],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required],
      concerns: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      diseases: ['', [Validators.minLength(3), Validators.maxLength(30)]],
      previous: [false], // Set the default value to false
      doctor: [null] // Initialize with null, we'll set the value in ngOnInit

    }); 
  }

  ngOnInit( ) {
    this.getOneDoctor();
  }
  public getOneDoctor() : void {
    const doctorId = 1; // Replace with the actual doctor ID

    this.doctorService.getOneDoctor(doctorId).subscribe(
      (response : Doctor) =>{
        this.doctor = response;
        this.consultationForm.patchValue({
          doctor: this.doctor // Set the value of the 'doctor' form control
        });
        console.log("hi",response);
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    )
  }


  public onSubmit(): void {
    this.consultationService.createConsultation(this.consultationForm.value).subscribe(
      (response: Consultation) =>{
        console.log(response);

      },
      (error: HttpErrorResponse) =>{
        alert(error.message);
      }
    );
    };
  };
