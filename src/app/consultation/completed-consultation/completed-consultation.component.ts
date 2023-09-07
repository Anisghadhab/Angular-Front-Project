import { Component, OnInit } from '@angular/core';

import { HttpErrorResponse } from '@angular/common/http';
import { Consultation } from '../consultation';
import { ConsultationService } from '../consultation.service';

@Component({
  selector: 'app-completed-consultation',
  templateUrl: './completed-consultation.component.html',
  styleUrls: ['./completed-consultation.component.css']
})
export class CompletedConsultationComponent implements OnInit {
  public completedConsultations: Consultation[] = [];

  constructor(private consultationService: ConsultationService) { }

  ngOnInit(): void {
    this.getCompletedConsultations();
  }
  getCompletedConsultations(): void {
    this.consultationService.getConsultations().subscribe(
      (response: Consultation[]) => {
        this.completedConsultations = response.filter(consultation => consultation.status === 'completed');
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
