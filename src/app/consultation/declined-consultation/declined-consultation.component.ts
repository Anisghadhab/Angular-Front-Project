import { Component, OnInit } from '@angular/core';

import { HttpErrorResponse } from '@angular/common/http';
import { Consultation } from '../consultation';
import { ConsultationService } from '../consultation.service';

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
