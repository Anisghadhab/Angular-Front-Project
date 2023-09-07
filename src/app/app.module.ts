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
import { LoginDoctorComponent } from './doctor/login-doctor/login-doctor.component';
import { RegisterDoctorComponent } from './doctor/register-doctor/register-doctor.component';
import { DashboardDoctorComponent } from './doctor/dashboard-doctor/dashboard-doctor.component';
import { PatientInformationComponent } from './patient/patient-information/patient-information.component';
import { DoctorInformationComponent } from './doctor/doctor-information/doctor-information.component';
import { NoteComponent } from './note/note.component';
import { ReviewComponent } from './review/review.component';
import { PrescriptionComponent } from './prescription/prescription.component';
import { AddressComponent } from './address/address.component';
import { MedicineComponent } from './medicine/medicine.component';
import { PendingConsultationComponent } from './consultation/pending-consultation/pending-consultation.component';
import { PatientCardComponent } from './patient/patient-card/patient-card.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DiscussionComponent } from './discussion/discussion.component';
import { CloseConsultationComponent } from './consultation/close-consultation/close-consultation.component';
import { NavbarDashboardComponent } from './navbar-dashboard/navbar-dashboard.component';
import { CompletedConsultationComponent } from './consultation/completed-consultation/completed-consultation.component';
import { DeclinedConsultationComponent } from './consultation/declined-consultation/declined-consultation.component';
import { MyAgendaComponent } from './my-agenda/my-agenda.component';
import { SessionServiceComponent } from './session-service/session-service.component';
import { LogoutButtonComponent } from './logout-button/logout-button.component';
import { DashboardButtonComponent } from './dashboard-button/dashboard-button.component';
import { EditDoctorComponent } from './doctor/edit-doctor/edit-doctor.component';
import { DoctorProfileComponent } from './doctor/doctor-profile/doctor-profile.component';
import { RelativeTimePipe } from './relative-time-pipe/relative-time-pipe.component';
import { CommonModule, DatePipe } from '@angular/common';
import { LoginComponent } from './patient-side/login-patient/login.component';

@NgModule({
    declarations: [
        RelativeTimePipe,
        AppComponent,
        DoctorComponent,
        ConsultationFormComponent,
        PatientComponent,
        LoginDoctorComponent,
        LoginComponent,
        RegisterDoctorComponent,
        DashboardDoctorComponent,
        PatientInformationComponent,
        DoctorInformationComponent,
        NoteComponent,
        ReviewComponent,
        PrescriptionComponent,
        AddressComponent,
        MedicineComponent,
        PendingConsultationComponent,
        PatientCardComponent,
        NavBarComponent,
        DiscussionComponent,
        CloseConsultationComponent,
        NavbarDashboardComponent,
        CompletedConsultationComponent,
        DeclinedConsultationComponent,
        MyAgendaComponent,
        SessionServiceComponent,
        LogoutButtonComponent,
        DashboardButtonComponent,
        EditDoctorComponent,
        DoctorProfileComponent,
    ],
    providers: [
        DatePipe, // Add DatePipe to the providers array
    ],
    bootstrap: [AppComponent],
    imports: [
        CommonModule,
        BrowserModule,
        AppRoutingModule,

        HttpClientModule,
        ReactiveFormsModule,
        RouterOutlet
    ],
    exports: [RelativeTimePipe]
})
export class AppModule { }
