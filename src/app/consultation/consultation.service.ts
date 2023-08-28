import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Consultation } from './consultation';
import { environment } from 'src/environnement/environment';

@Injectable({
  providedIn: 'root'
})
export class ConsultationService {
  // call the localhost url
  private apiServerUrl =environment.apiBaseUrl;
  // create an instance of HttpClient to make the requests
  constructor(private http: HttpClient) { }
  // make a function to get the consultations
  public getConsultations(): Observable<Consultation[]> {
    return this.http.get<Consultation[]>(`${this.apiServerUrl}/api/consultations`)
  }

  public createConsultation(consultation: Consultation): Observable<Consultation> {
    const url = `${this.apiServerUrl}/api/consultations`; // Adjust the endpoint as needed
    return this.http.post<Consultation>(url, consultation);
  }}
