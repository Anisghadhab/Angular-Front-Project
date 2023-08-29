import { Component } from '@angular/core';
import { Consultation } from '../consultation/consultation';
import { ConsultationService } from '../consultation/consultation.service';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-dashboard-doctor',
  templateUrl: './dashboard-doctor.component.html',
  styleUrls: ['./dashboard-doctor.component.css']
})
export class DashboardDoctorComponent {
  public consultations!: Consultation[];


  constructor(private consultationService: ConsultationService) { }

  ngOnInit() {
    this.getConsultations();
}


public getConsultations(): void {
  this.consultationService.getConsultations().subscribe(
    (response: Consultation[]) => {
      this.consultations = response;
      console.log(response);
    },
    (error: HttpErrorResponse) => {
      alert(error.message)
    }

  )
}





}
