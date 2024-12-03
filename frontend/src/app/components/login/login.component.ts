import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  user:any= {
    username: '',
    password: ''
  };

  constructor(private authService: AuthService,private alertService:AlertService, private router: Router) {}

  onSubmit() {
    this.authService.login(this.user).subscribe(
      (response) => {
        // Save token and navigate
        localStorage.setItem('token', response.token);
        localStorage.setItem('user', JSON.stringify(response.user));

        this.alertService.success('Login successfully');
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        console.error('Login failed', error);
        this.alertService.error(error?.error?.message||'This is an error message!');
      }
    );
  }
}
