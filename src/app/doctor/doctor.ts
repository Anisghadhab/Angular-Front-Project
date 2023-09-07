import { Address } from "../address/address";
import { Consultation } from "../consultation/consultation";
import { Prescription } from "../prescription/prescription";
import { Review } from "../review/review";
import { DoctorInformation } from "./doctor-information/doctor-information";

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
    doctorInformation: DoctorInformation;
    doctorConsultations: Consultation [];
    doctorReviews: Review[];
    doctorPrescriptions: Prescription [];
    address: Address;
}