import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundedPillComponent } from './rounded-pill.component';

describe('RoundedPillComponent', () => {
  let component: RoundedPillComponent;
  let fixture: ComponentFixture<RoundedPillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RoundedPillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoundedPillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
