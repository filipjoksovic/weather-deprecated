import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationBannerComponent } from './location-banner.component';

describe('LocationBannerComponent', () => {
  let component: LocationBannerComponent;
  let fixture: ComponentFixture<LocationBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ LocationBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
