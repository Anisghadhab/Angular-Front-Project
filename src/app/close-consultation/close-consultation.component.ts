import { Component, OnInit } from '@angular/core';
import { ConsultationService } from '../consultation/consultation.service';
import { ActivatedRoute } from '@angular/router';
import { Consultation } from '../consultation/consultation';

@Component({
  selector: 'app-close-consultation',
  templateUrl: './close-consultation.component.html',
  styleUrls: ['./close-consultation.component.css']
})
export class CloseConsultationComponent implements OnInit {
  consultation!: Consultation;
  consultationId!: number;
  constructor(
    private consultationService: ConsultationService,
    private route: ActivatedRoute
  ) { }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.consultationId = +params['id'];
      if (this.consultationId) {
        this.fetchConsultation(this.consultationId);
      }
    });
  }
  fetchConsultation(id: number) {
    this.consultationService.getConsultationById(id).subscribe(
      (consultation: Consultation) => {
        this.consultation = consultation;
      },
      (error) => {
        console.log(error);
      }
    )
  }
  completeConsultation() {
        if (this.consultation) {
      this.consultationService.updateConsultationStatus(this.consultation.id, 'completed').subscribe(
        (updatedConsultation: Consultation) => {
          this.consultation = updatedConsultation;
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }

}