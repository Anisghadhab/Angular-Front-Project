import { Doctor } from "../doctor/doctor";

export interface Address {
    id: number;
    state: string;
    city: string;
    street: string;
    createdAt:Date;
    updatedAt: Date;
    doctor: Doctor[];
}