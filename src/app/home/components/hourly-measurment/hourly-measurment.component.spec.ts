import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HourlyMeasurmentComponent } from './hourly-measurment.component';

describe('HourlyMeasurmentComponent', () => {
  let component: HourlyMeasurmentComponent;
  let fixture: ComponentFixture<HourlyMeasurmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HourlyMeasurmentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HourlyMeasurmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
