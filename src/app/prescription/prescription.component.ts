import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ConsultationService } from '../consultation/consultation.service';
import { Consultation } from '../consultation/consultation';
import { SessionServiceService } from '../session-service/session-service.service';


@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.css']
})
export class PrescriptionComponent implements OnInit {
  consultationId!: number;
  doctorId!: any;
  patientId!:any;
  prescriptionForm!: FormGroup;
  consultation!: Consultation;



  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,  
    private consultationService: ConsultationService,
    private sessionService: SessionServiceService


  ) {
    this.prescriptionForm = this.fb.group({
      medicines: this.fb.array([]) // Initialize an empty array for medicines
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.consultationId = +params['id'];
      this.fetchConsultation (this.consultationId);

    });    
    this.doctorId = this.sessionService.getDoctorId()

  }
  get medicines() {
    return this.prescriptionForm.get('medicines') as FormArray;
  }

  fetchConsultation(id: number) {
    this.consultationService.getConsultationById(id).subscribe(
      (consultation:Consultation) =>{
        this.consultation = consultation;
        this.patientId = consultation.patient.id
        console.log("hi patient", this.patientId)
        console.log("***",consultation)
      },
      (error) =>{
        console.log(error);
      }
    )
  }


  addMedicine() {
    const medicine = this.fb.group({
      medicineName: ['', Validators.required],
      morning: [null, Validators.required],
      afternoon: [null, Validators.required],
      night: [null, Validators.required],
    });
    this.medicines.push(medicine);
  }
  onSubmit() {
    if (this.prescriptionForm.valid) {
      const medicineName = this.prescriptionForm.value.medicineName;
      const morning = this.prescriptionForm.value.morning;
      const afternoon = this.prescriptionForm.value.afternoon;
      const night = this.prescriptionForm.value.night;

      // Now you can create a prescription using this data
      const prescriptionData = {
        medicineName,
        morning,
        afternoon,
        night,
        // doctorId: /* Provide the doctor id */
        // patientId: /* Provide the patient id */
      };
      
    }
  }
}