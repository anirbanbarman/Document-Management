import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngestionManagementComponent } from './ingestion-management.component';

describe('IngestionManagementComponent', () => {
  let component: IngestionManagementComponent;
  let fixture: ComponentFixture<IngestionManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IngestionManagementComponent]
    });
    fixture = TestBed.createComponent(IngestionManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
