import { Consultation } from "../consultation/consultation";
import { PatientInformation } from "../patient-information/patient-information";
import { Prescription } from "../prescription/prescription";
import { Review } from "../review/review";
export interface Patient {
    id: number;
    firstName:string;
    lastName: string;
    email: string;
    password: number;
    confirmPassword: number;
    createdAt:Date;
    updatedAt:Date;
    patientReviews: Review[];
    patientPrescriptions: Prescription[];
    patientConsultations: Consultation[];
    patientInformation: PatientInformation
}