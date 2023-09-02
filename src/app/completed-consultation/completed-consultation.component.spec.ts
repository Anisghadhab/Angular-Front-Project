import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedConsultationComponent } from './completed-consultation.component';

describe('CompletedConsultationComponent', () => {
  let component: CompletedConsultationComponent;
  let fixture: ComponentFixture<CompletedConsultationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompletedConsultationComponent]
    });
    fixture = TestBed.createComponent(CompletedConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
