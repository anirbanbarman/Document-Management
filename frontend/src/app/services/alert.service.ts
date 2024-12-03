import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private successSubject = new Subject<string>();
  private errorSubject = new Subject<string>();

  success$ = this.successSubject.asObservable();
  error$ = this.errorSubject.asObservable();

  // Trigger success alert
  success(message: string) {
    this.successSubject.next(message);
    this.autoHideAlert();
  }

  // Trigger error alert
  error(message: string) {
    this.errorSubject.next(message);
    this.autoHideAlert();
  }

  private autoHideAlert() {
    setTimeout(() => {
      this.successSubject.next('');
      this.errorSubject.next('');
    }, 3000); // 5 minutes
  }
}
