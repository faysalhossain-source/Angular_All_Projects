import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HurryPooterComponent } from './hurry-pooter.component';

describe('HurryPooterComponent', () => {
  let component: HurryPooterComponent;
  let fixture: ComponentFixture<HurryPooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HurryPooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HurryPooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
