import { Component, OnInit } from '@angular/core';
import { Consultation } from '../consultation/consultation';
import { ConsultationService } from '../consultation/consultation.service';
import { HttpErrorResponse } from '@angular/common/http';
import { SessionServiceService } from '../session-service/session-service.service';

@Component({
  selector: 'app-dashboard-doctor',
  templateUrl: './dashboard-doctor.component.html',
  styleUrls: ['./dashboard-doctor.component.css']
})
export class DashboardDoctorComponent implements OnInit {
  public pendingConsultations: Consultation[] = [];
  public acceptedConsultations: Consultation[] = [];

  constructor(
    private consultationService: ConsultationService,
    private sessionService : SessionServiceService

    ) { }

  ngOnInit() {
    this.getConsultations();
    console.log("Doctor Id: ",this.sessionService.getDoctorId())
  }

  public getConsultations(): void {
    this.consultationService.getConsultations().subscribe(
      (response: Consultation[]) => {
        
        this.pendingConsultations = response.filter(consultation => consultation.status === 'pending');
        this.acceptedConsultations = response.filter(consultation => consultation.status === 'accepted');
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
