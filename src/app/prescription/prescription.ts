import { Doctor } from "../doctor/doctor";
import { Medicine } from "../medicine/medicine";
import { Patient } from "../patient/patient";

export interface Prescription {
    id: number;
    prescriptionFile: String;
    createdAr:Date;
    updatedAt:Date;
    patient: Patient;
    doctor: Doctor;
    medicines: Medicine[];
    
    
}