import { Consultation } from "../consultation/consultation";

export interface Note {
    id:number;
    note: string;
    consultation: Consultation;
    createdAt:Date;
    updatedAt:Date;
    
}