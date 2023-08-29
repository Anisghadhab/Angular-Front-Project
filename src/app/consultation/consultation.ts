import { Doctor } from "../doctor/doctor";
import { Note } from "../note/note";
import { Patient } from "../patient/patient";

export interface Consultation {
    id: number;
    status: string;
    startTime: Date;
    endTime: Date;
    concerns: string;
    diseases: string;
    previous: boolean;
    doctor: Doctor;
    patient: Patient;
    notes: Note[];
    createdAt: Date;
    updatedAt: Date;
    
}