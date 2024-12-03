import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const token = this.authService.getToken();
    if (token && this.authService.isAuthenticated()) {
      // Here, you can decode the token and check for the 'admin' role
      // For simplicity, this is omitted in this example
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
