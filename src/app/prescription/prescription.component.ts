import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PrescriptionService } from './prescription.service';
import { HttpClient } from '@angular/common/http';
import { Prescription } from './prescription';

@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.css']
})
export class PrescriptionComponent implements OnInit {
  consultationId!: number;
  prescriptionForm!: FormGroup;
  successMessage!: string;
  errorMessage!: string;
  prescriptions!: Prescription[];
  
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private prescriptionService: PrescriptionService


  ) { }
  
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.consultationId = +params['id'];

    });
    this.prescriptionForm = this.formBuilder.group({
      prescriptionFile: ['', [Validators.required]],
    });

    // Fetch all prescriptions when the component initializes
    this.fetchPrescriptions();
  }

  onFileChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {

      this.prescriptionForm.get('prescriptionFile')?.setValue(inputElement.files[0]);
      console.log("hello",      this.prescriptionForm.get('prescriptionFile')?.setValue(inputElement.files[0])
      )
          // Clear the selected file by setting the 'value' to an empty string

    }
  }

  onSubmit() {
    if (this.prescriptionForm.valid) {
      const prescriptionFile = this.prescriptionForm.get('prescriptionFile')?.value;

      this.prescriptionService.uploadPrescription(prescriptionFile).subscribe(
        (response) => {
          console.log(response)
          this.successMessage = 'Prescription uploaded successfully.';
          this.errorMessage = "null";
          this.fetchPrescriptions(); // Refresh the list of prescriptions
        },
        (error) => {
          console.log(error)
          this.errorMessage = 'Error uploading prescription.';
          this.successMessage = "null";
        }
      );
    }
  }

  fetchPrescriptions(): void {
    this.prescriptionService.getAllPrescriptions().subscribe(
      (prescriptions: Prescription[]) => {
        this.prescriptions = prescriptions;
        console.log(prescriptions)
      },
      (error) => {
        console.error('Error fetching prescriptions:', error);
      }
    );
  }
}