import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinballpriceComponent } from './pinballprice.component';

describe('PinballpriceComponent', () => {
  let component: PinballpriceComponent;
  let fixture: ComponentFixture<PinballpriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PinballpriceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PinballpriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
