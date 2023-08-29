import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environnement/environment';
import { DoctorInformation } from './doctor-information';

@Injectable({
  providedIn: 'root'
})
export class DoctorInformationService {
  private apiServerUrl =environment.apiBaseUrl;


  constructor(private http: HttpClient) { }

  public addDoctorInformation(DoctorInformation : DoctorInformation): Observable<DoctorInformation> {
    return this.http.post<DoctorInformation> (`${this.apiServerUrl}/api/doctorInformations`, DoctorInformation);
  }



}
