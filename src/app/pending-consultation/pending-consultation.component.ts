import { Component, Input, OnInit } from '@angular/core';
import { Consultation } from '../consultation/consultation';
import { ConsultationService } from '../consultation/consultation.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pending-consultation',
  templateUrl: './pending-consultation.component.html',
  styleUrls: ['./pending-consultation.component.css']
})
export class PendingConsultationComponent implements OnInit {
  @Input() consultation: Consultation | undefined;
  consultationId: number | undefined; // Define consultationId to store the ID from the rout

  constructor(
    private consultationService: ConsultationService,
    private route: ActivatedRoute // Inject ActivatedRoute
  ) { }


  ngOnInit(): void {
    // Get the consultation ID from the route parameters
    this.route.params.subscribe(params => {
      this.consultationId = +params['id']; // Convert to number
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
        console.error(error);
      }
    );
  }


  acceptConsultation() {
    if (this.consultation) {
      this.consultationService.updateConsultationStatus(this.consultation.id, 'accepted').subscribe(
        (updatedConsultation: Consultation) => {
          this.consultation = updatedConsultation;
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }

  declineConsultation() {
    if (this.consultation) {
      this.consultationService.updateConsultationStatus(this.consultation.id, 'declined').subscribe(
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

