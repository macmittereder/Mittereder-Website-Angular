import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleappComponent } from './vehicleapp.component';

describe('VehicleappComponent', () => {
  let component: VehicleappComponent;
  let fixture: ComponentFixture<VehicleappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleappComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
