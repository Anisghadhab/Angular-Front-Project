import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientComponent } from './patient/patient.component';
import { ConsultationFormComponent } from './consultation/consultation-form.component';
import { DoctorComponent } from './doctor/doctor.component';

import { NoteComponent } from './note/note.component';
import { PrescriptionComponent } from './prescription/prescription.component';

import { AuthGuard } from './auth-guard/auth-guard.component';
import { DiscussionComponent } from './discussion/discussion.component';
import { RegisterDoctorComponent } from './doctor/register-doctor/register-doctor.component';
import { LoginDoctorComponent } from './doctor/login-doctor/login-doctor.component';
import { DashboardDoctorComponent } from './doctor/dashboard-doctor/dashboard-doctor.component';
import { DoctorInformationComponent } from './doctor/doctor-information/doctor-information.component';
import { PendingConsultationComponent } from './consultation/pending-consultation/pending-consultation.component';
import { PatientCardComponent } from './patient/patient-card/patient-card.component';
import { CloseConsultationComponent } from './consultation/close-consultation/close-consultation.component';
import { CompletedConsultationComponent } from './consultation/completed-consultation/completed-consultation.component';
import { DeclinedConsultationComponent } from './consultation/declined-consultation/declined-consultation.component';
import { MyAgendaComponent } from './my-agenda/my-agenda.component';
import { EditDoctorComponent } from './doctor/edit-doctor/edit-doctor.component';
import { DoctorProfileComponent } from './doctor/doctor-profile/doctor-profile.component';
import { LoginComponent } from './patient-side/login-patient/login.component';

const routes: Routes = [
  { path: "patients", component: PatientComponent, canActivate: [AuthGuard]  },
  { path: "consultations", component: ConsultationFormComponent },
  { path: "doctors", component: DoctorComponent },
  { path: "doctors/register", component: RegisterDoctorComponent },
  { path: "doctors/login", component: LoginDoctorComponent },
  { path: 'patients/login', component: LoginComponent },

  { path: 'doctors/dashboard', component: DashboardDoctorComponent, canActivate: [AuthGuard]  },
  { path: 'doctors/details', component: DoctorInformationComponent },
  { path: 'doctors/pending-consultation/:id', component: PendingConsultationComponent },
  { path: 'doctors/consultation/:id', component: PatientCardComponent },
  { path: 'doctors/note/:id', component: NoteComponent },
  { path: 'doctors/prescription/:id', component: PrescriptionComponent },
  { path: 'doctors/close/:id', component: CloseConsultationComponent },
  { path: 'doctors/completed-consultation', component: CompletedConsultationComponent},
  { path: 'doctors/declined-consultation', component: DeclinedConsultationComponent},
  { path: 'doctors/agenda', component: MyAgendaComponent},
  { path: 'doctors/edit', component: EditDoctorComponent},
  { path: 'doctors/discussion/:id', component: DiscussionComponent },
  { path: 'doctors/profile', component: DoctorProfileComponent },




];

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
