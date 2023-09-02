import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionServiceService {
  private readonly DOCTOR_ID_KEY = 'doctorId';

  constructor() { }

  setDoctorId(doctorId: number): void {
    sessionStorage.setItem(this.DOCTOR_ID_KEY, doctorId.toString());
  }
  getDoctorId(): number | null {
    const storedId = sessionStorage.getItem(this.DOCTOR_ID_KEY);
    return storedId ? +storedId : null;
  }
  clearSession(): void {
    sessionStorage.clear();
  }
}
