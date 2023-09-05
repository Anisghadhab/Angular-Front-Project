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
import { PatientCardComponent } from './patient-card/patient-card.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DiscussionComponent } from './discussion/discussion.component';
import { CloseConsultationComponent } from './close-consultation/close-consultation.component';
import { ProfileComponent } from './profile/profile.component';
import { NavbarDashboardComponent } from './navbar-dashboard/navbar-dashboard.component';
import { CompletedConsultationComponent } from './completed-consultation/completed-consultation.component';
import { DeclinedConsultationComponent } from './declined-consultation/declined-consultation.component';
import { MyAgendaComponent } from './my-agenda/my-agenda.component';
import { SessionServiceComponent } from './session-service/session-service.component';
import { LogoutButtonComponent } from './logout-button/logout-button.component';
import { DashboardButtonComponent } from './dashboard-button/dashboard-button.component';
import { EditDoctorComponent } from './edit-doctor/edit-doctor.component';

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
        PendingConsultationComponent,
        PatientCardComponent,
        NavBarComponent,
        DiscussionComponent,
        CloseConsultationComponent,
        ProfileComponent,
        NavbarDashboardComponent,
        CompletedConsultationComponent,
        DeclinedConsultationComponent,
        MyAgendaComponent,
        SessionServiceComponent,
        LogoutButtonComponent,
        DashboardButtonComponent,
        EditDoctorComponent,
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
