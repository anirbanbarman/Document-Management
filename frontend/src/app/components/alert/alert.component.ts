import { Component, OnInit, OnDestroy } from '@angular/core';
import { AlertService } from '../../services/alert.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit, OnDestroy {
  successMessage: string | null = null;
  errorMessage: string | null = null;
  private successSubscription!: Subscription;
  private errorSubscription!: Subscription;

  constructor(private alertService: AlertService) {}

  ngOnInit(): void {
    this.successSubscription = this.alertService.success$.subscribe((message) => {
      this.successMessage = message;
    });

    this.errorSubscription = this.alertService.error$.subscribe((message) => {
      this.errorMessage = message;
    });
  }

  ngOnDestroy(): void {
    this.successSubscription.unsubscribe();
    this.errorSubscription.unsubscribe();
  }

  closeAlert() {
    this.successMessage = null;
    this.errorMessage = null;
  }
}
