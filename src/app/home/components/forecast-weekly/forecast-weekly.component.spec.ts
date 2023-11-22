import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastWeeklyComponent } from './forecast-weekly.component';

describe('ForecastWeeklyComponent', () => {
  let component: ForecastWeeklyComponent;
  let fixture: ComponentFixture<ForecastWeeklyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ForecastWeeklyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ForecastWeeklyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
