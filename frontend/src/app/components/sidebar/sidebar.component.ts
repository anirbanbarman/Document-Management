import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  isAdmin: boolean = false;
  isEditor: boolean = false;
  isViewer: boolean = false;

  constructor() {}

  ngOnInit(): void {
    // Check role from local storage or session storage after login
    const userRole = localStorage.getItem('userRole');
    if (userRole) {
      if (userRole === 'admin') {
        this.isAdmin = true;
      } else if (userRole === 'editor') {
        this.isEditor = true;
      } else if (userRole === 'viewer') {
        this.isViewer = true;
      }
    }
  }
}
