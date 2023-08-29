import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DoctorInformationService } from './doctor-information.service';
import { DoctorInformation } from './doctor-information';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-doctor-information',
  templateUrl: './doctor-information.component.html',
  styleUrls: ['./doctor-information.component.css']
})
export class DoctorInformationComponent {
  doctorInformationForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private doctorInformationService: DoctorInformationService
  ) { }

  ngOnInit(): void {
    this.doctorInformationForm = this.fb.group({
      price: [null, Validators.required],
      phoneNumber: [null, Validators.required],
      startTime: [null, Validators.required],
      endTime: [null, Validators.required],
      // doctorId: [null, Validators.required]


    })
  }
  onSubmit() {
    // const doctorId = this.doctorInformationForm.get('doctorId')!.value;
    this.doctorInformationService.addDoctorInformation(this.doctorInformationForm.value).subscribe(
      (response: DoctorInformation) => {
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        console.log(error.message)
      }
    )
  }



}
