import { Component, OnInit } from '@angular/core';
import { SessionServiceService } from '../session-service/session-service.service';
import { DoctorService } from '../doctor/doctor.service';
import { Doctor } from '../doctor/doctor';
import { HttpErrorResponse } from '@angular/common/http';
import { ReviewService } from '../review/review.service';

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.css']
})
export class DoctorProfileComponent implements OnInit {
  public thisDoctor!: Doctor;

  constructor(
    private doctorService: DoctorService,
    private reviewService : ReviewService,
    private sessionService : SessionServiceService
    ) { }


  ngOnInit(): void {
    this.getDoctor();
  }


  public getDoctor(): void {
    this.doctorService.getOneDoctor(this.sessionService.getDoctorId()).subscribe(
      (response: Doctor) => {
        this.thisDoctor = response;
        console.log(response)
      }
      ,
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }
  public calculateAverageRating(reviews: any[]): number {
    if (reviews.length === 0) {
      return 0; // Return 0 if there are no reviews to avoid NaN
    }
  
    const totalRating = reviews.reduce((sum, review) => sum + review.rate, 0);
    console.log(totalRating)
    return totalRating / reviews.length;

  }
  

}
