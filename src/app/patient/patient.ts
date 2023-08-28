import { Consultation } from "../consultation/consultation";
export interface Patient {
    id: number;
    firstName:string;
    lastName: string;
    email: string;
    password: number;
    confirm: number;
    createdAt:Date;
    updatedAt:Date;
    patientConsultations: Consultation[];
}