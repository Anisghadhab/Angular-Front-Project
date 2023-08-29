import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientComponent } from './patient/patient.component';
import { ConsultationFormComponent } from './consultation/consultation-form.component';
import { DoctorComponent } from './doctor/doctor.component';
import { RegisterDoctorComponent } from './register-doctor/register-doctor.component';
import { DashboardDoctorComponent } from './dashboard-doctor/dashboard-doctor.component';
import { LoginDoctorComponent } from './login-doctor/login-doctor.component';
import { DoctorInformationComponent } from './doctor-information/doctor-information.component';
import { PendingConsultationComponent } from './pending-consultation/pending-consultation.component';
const routes: Routes = [
  { path: "patients", component: PatientComponent },
  { path: "consultations", component: ConsultationFormComponent },
  { path: "doctors", component: DoctorComponent },
  { path: "doctors/register", component: RegisterDoctorComponent },
  { path: "doctors/login", component: LoginDoctorComponent },
  { path: 'doctors/dashboard', component: DashboardDoctorComponent },
  { path: 'doctors/information', component: DoctorInformationComponent },
  { path: 'doctors/pending-consultation/:id', component: PendingConsultationComponent }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
