import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DoctorInformationService } from './doctor-information.service';
import { DoctorInformation } from './doctor-information';
import { HttpErrorResponse } from '@angular/common/http';
import { SessionServiceService } from '../session-service/session-service.service';
import { DoctorService } from '../doctor/doctor.service';
import { Doctor } from '../doctor/doctor';

@Component({
  selector: 'app-doctor-information',
  templateUrl: './doctor-information.component.html',
  styleUrls: ['./doctor-information.component.css']
})
export class DoctorInformationComponent {
  doctorInformationForm!: FormGroup;
  oneDoctor! : Doctor  ;
  constructor(
    private fb: FormBuilder,
    private doctorInformationService: DoctorInformationService,
    private sessionService: SessionServiceService,
    private doctorService: DoctorService
    
    
  ) { }

  ngOnInit(): void {
    this.doctorInformationForm = this.fb.group({
      price: [null, Validators.required],
      phoneNumber: [null, Validators.required],
      startTime: [null, Validators.required],
      endTime: [null, Validators.required],
      // doctorId: [null, Validators.required]
    })
    this.fetchOneDoctor();
  }
  public fetchOneDoctor (): void {
    const DoctorId = this.sessionService.getDoctorId();
    console.log(DoctorId)

      this.doctorService.getOneDoctor(DoctorId).subscribe(
        (response : Doctor) => {
          this.oneDoctor = response;
          console.log(response)
          console.log("hi",response.doctorInformation);
        },
        (error: HttpErrorResponse)=> {
          alert(error.message)
        }
      )
  }
  

  onSubmit() {
    const DoctorId = this.sessionService.getDoctorId();
    this.doctorInformationService.addDoctorInformation(DoctorId, this.doctorInformationForm.value).subscribe(
      (response: DoctorInformation) => {
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        console.log(error.message)
      }
    )
  }



}
