import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  private routeSubscription!: Subscription;

  user: any =null;
  constructor(public authService: AuthService, private router: Router) {
   
  }

  ngOnInit(): void {
    this.routeSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
      this.getUserDetails()
      }

      if (event instanceof NavigationError) {
        console.error('Navigation error:', event.error);
     
      }
    });
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  
    this.getUserDetails();  
  }
  getUserDetails() {
    setTimeout(() => {
      if (localStorage.getItem('user')) {
        this.user = JSON.parse(localStorage.getItem('user') || '');
        console.log(this.user);
      }
    }, 800);
  }
  ngOnDestroy() {
    // Unsubscribe to prevent memory leaks
    if (this.routeSubscription) {
      this.routeSubscription.unsubscribe();
    }
  }
}
