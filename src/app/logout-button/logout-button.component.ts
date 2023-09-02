import { Component, OnInit } from '@angular/core';
import { SessionServiceService } from '../session-service/session-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout-button',
  templateUrl: './logout-button.component.html',
  styleUrls: ['./logout-button.component.css']
})
export class LogoutButtonComponent implements OnInit {



  constructor(
    private sessionService: SessionServiceService,
    private router: Router

  ) { }


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  logout() {
    this.sessionService.clearSession()
    this.router.navigateByUrl('/doctors/login');

  }

}
