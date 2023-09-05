import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-button',
  templateUrl: './dashboard-button.component.html',
  styleUrls: ['./dashboard-button.component.css']
})
export class DashboardButtonComponent {
  constructor(private router: Router) {}



  redirectToDoctorDashboard() {
    this.router.navigate(['/doctors/dashboard']);
  }
  
}

