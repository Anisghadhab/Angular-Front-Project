import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SessionServiceService } from '../session-service/session-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private sessionService : SessionServiceService

    ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    // Check if the user is authenticated (you can replace this with your authentication logic)
    const isAuthenticated = this.sessionService.getDoctorId()  /* Implement your authentication check here */;

    if (isAuthenticated) {
      return true;
    } else {
      // Redirect to the login page or any other page
      this.router.navigate(['doctors/login']);
      return false;
    }
  }
}
