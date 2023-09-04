import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environnement/environment';
import { Prescription } from './prescription';

@Injectable({
  providedIn: 'root'
})
export class PrescriptionService {
  private apiServerUrl =environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  // Upload a prescription
  uploadPrescription(prescriptionFile: File): Observable<Prescription> {
    const formData: FormData = new FormData();
    formData.append('prescriptionFile', prescriptionFile, prescriptionFile.name);

    return this.http.post<Prescription>(`${this.apiServerUrl}/api/prescriptions/1/1`, formData);
  }

  // Get all prescriptions
  getAllPrescriptions(): Observable<Prescription[]> {
    return this.http.get<Prescription[]>(`${this.apiServerUrl}/api/prescriptions`);
  }

  // Get a prescription by ID
  getPrescriptionById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiServerUrl}/${id}`);
  }

  // Update an existing prescription
  updatePrescription(id: number, prescriptionFile: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('prescriptionFile', prescriptionFile, prescriptionFile.name);

    return this.http.put<any>(`${this.apiServerUrl}/${id}`, formData);
  }

  // Delete a prescription by ID
  deletePrescription(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/${id}`);
  }
}
