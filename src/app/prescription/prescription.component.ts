import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ConsultationService } from '../consultation/consultation.service';
import { Consultation } from '../consultation/consultation';
import { SessionServiceService } from '../session-service/session-service.service';
import { PrescriptionService } from './prescription.service';
import { Prescription } from './prescription';

@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.css']
})
export class PrescriptionComponent implements OnInit {
  consultationId!: number;
  doctorId!: any;
  patientId!: any;
  prescriptionForm!: FormGroup;
  consultation!: Consultation;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private consultationService: ConsultationService,
    private sessionService: SessionServiceService,
    private prescriptionService: PrescriptionService,

  ) {
    this.prescriptionForm = this.fb.group({
      medicines: this.fb.array([]) // Initialize an empty array for medicines
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.consultationId = +params['id'];
      this.fetchConsultation(this.consultationId);
    });
    this.doctorId = this.sessionService.getDoctorId();
  }

  get medicines() {
    return this.prescriptionForm.get('medicines') as FormArray;
  }

  fetchConsultation(id: number) {
    this.consultationService.getConsultationById(id).subscribe(
      (consultation: Consultation) => {
        this.consultation = consultation;
        this.patientId = consultation.patient.id;
        console.log("hi patient", this.patientId);
        console.log("***", consultation);
      },
      (error) => {
        console.log(error);
      }
    );
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
      const medicinesData = this.prescriptionForm.value.medicines.map((medicine: any) => ({
        medicineName: medicine.medicineName,
        morning: medicine.morning,
        afternoon: medicine.afternoon,
        night: medicine.night,
      }));

      // Now you can create a prescription using this data
      const prescriptionData = {
        medicines: medicinesData,
      };

      this.prescriptionService.createPrescription(prescriptionData, this.doctorId, this.patientId).subscribe(
        (createdPrescription : Prescription) => {
          console.log('Prescription created:', createdPrescription);


        },
        (error) => {
          // Handle any errors here, for example, show an error message
          console.error('Error creating prescription:', error);
        }
      )





      // Use prescriptionData for your HTTP request to the backend
      // For example, call your prescription creation service method here
      // Pass prescriptionData as the request body
    }
  }
}
