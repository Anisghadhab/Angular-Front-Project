import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environnement/environment';
import { Discussion } from './discussion';

@Injectable({
  providedIn: 'root'
})
export class DiscussionService {
  private apiServerUrl =environment.apiBaseUrl;
  constructor(private http: HttpClient) { }

  public getDiscussion(): Observable<Discussion[]> {
    return this.http.get<Discussion[]>(`${this.apiServerUrl}/api/discussion`)
  }
  
  public createDiscussion(consultation: Discussion): Observable<Discussion> {
    const url = `${this.apiServerUrl}/api/Discussion`; // Adjust the endpoint as needed
    return this.http.post<Discussion>(url, consultation);
  }


}
