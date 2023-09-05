import { Component, OnInit } from '@angular/core';
import { ConsultationService } from '../consultation/consultation.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Consultation } from '../consultation/consultation';

@Component({
  selector: 'app-dicussion',
  templateUrl: './dicussion.component.html',
  styleUrls: ['./discussion.component.css']
})
export class DiscussionComponent implements OnInit {

  consultation!: Consultation;

  consultationId!: number;



  constructor(
    private consultationService: ConsultationService,
    private route: ActivatedRoute,
    private router: Router // Inject the Router

  ) { }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.consultationId = +params['id'];
      if (this.consultationId) {
        this.fetchConsultation(this.consultationId);
      }
    });  }


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


}
