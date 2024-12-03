import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  user:any = {
    username: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router,private alertService:AlertService) {}

  onSubmit() {
    this.authService.signup(this.user).subscribe(
      (response) => {
        this.alertService.success('Sign up successfully');
        this.router.navigate(['/login']);
      },
      (error) => {
        console.error('Signup failed', error);
        this.alertService.error(error?.error?.message||'This is an error message!');
      }
    );
  }
}
