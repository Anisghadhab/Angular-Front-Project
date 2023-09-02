import { Component, OnInit } from '@angular/core';
import { Consultation } from '../consultation/consultation';
import { ConsultationService } from '../consultation/consultation.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-declined-consultation',
  templateUrl: './declined-consultation.component.html',
  styleUrls: ['./declined-consultation.component.css']
})
export class DeclinedConsultationComponent implements OnInit {
  public declinedConsultations: Consultation[] = [];

  constructor(private consultationService: ConsultationService) { }


  ngOnInit(): void {
    this.getDeclinedConsultations();
  }

  getDeclinedConsultations(): void {
    this.consultationService.getConsultations().subscribe(
      (response: Consultation[]) => {
        this.declinedConsultations = response.filter(consultation => consultation.status === 'declined');
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
