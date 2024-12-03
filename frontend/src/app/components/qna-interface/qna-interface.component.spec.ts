import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QnaInterfaceComponent } from './qna-interface.component';

describe('QnaInterfaceComponent', () => {
  let component: QnaInterfaceComponent;
  let fixture: ComponentFixture<QnaInterfaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QnaInterfaceComponent]
    });
    fixture = TestBed.createComponent(QnaInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
