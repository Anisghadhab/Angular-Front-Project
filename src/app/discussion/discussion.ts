import { Doctor } from "../doctor/doctor";
import { Patient } from "../patient/patient";

export interface Discussion {
    id: number;
    message: string;
    createdAt:Date;
    updatedAt:Date;
    patient:Patient;
    doctor:Doctor;
}