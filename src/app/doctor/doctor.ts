import { Consultation } from "../consultation/consultation";

export interface Doctor {
    id: number;
    firstName:string;
    lastName: string;
    proficiency: string;
    email: string;
    password: string;
    confirm: string;
    createdAt:Date;
    updatedAt:Date;
    doctorConsultations: Consultation [];
}