import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ConsultationFormComponent } from './consultation/consultation-form.component';
import { PatientComponent } from './patient/patient.component';
import { DoctorComponent } from './doctor/doctor.component';
import { RouterOutlet } from "@angular/router";
import { LoginDoctorComponent } from './login-doctor/login-doctor.component';
import { RegisterDoctorComponent } from './register-doctor/register-doctor.component';
import { DashboardDoctorComponent } from './dashboard-doctor/dashboard-doctor.component';
import { PatientInformationComponent } from './patient-information/patient-information.component';
import { DoctorInformationComponent } from './doctor-information/doctor-information.component';
import { NoteComponent } from './note/note.component';
import { ReviewComponent } from './review/review.component';
import { PrescriptionComponent } from './prescription/prescription.component';
import { AddressComponent } from './address/address.component';
import { MedicineComponent } from './medicine/medicine.component';
import { PendingConsultationComponent } from './pending-consultation/pending-consultation.component';

@NgModule({
    declarations: [
        AppComponent,
        DoctorComponent,
        ConsultationFormComponent,
        PatientComponent,
        LoginDoctorComponent,
        RegisterDoctorComponent,
        DashboardDoctorComponent,
        PatientInformationComponent,
        DoctorInformationComponent,
        NoteComponent,
        ReviewComponent,
        PrescriptionComponent,
        AddressComponent,
        MedicineComponent,
        PendingConsultationComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        RouterOutlet
    ]
})
export class AppModule { }
