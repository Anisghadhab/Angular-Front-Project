import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclinedConsultationComponent } from './declined-consultation.component';

describe('DeclinedConsultationComponent', () => {
  let component: DeclinedConsultationComponent;
  let fixture: ComponentFixture<DeclinedConsultationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeclinedConsultationComponent]
    });
    fixture = TestBed.createComponent(DeclinedConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
