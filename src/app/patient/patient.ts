import { Consultation } from "../consultation/consultation";
import { Prescription } from "../prescription/prescription";
import { Review } from "../review/review";
import { PatientInformation } from "./patient-information/patient-information";
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