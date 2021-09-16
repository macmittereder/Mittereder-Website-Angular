import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameitComponent } from './frameit.component';

describe('FrameitComponent', () => {
  let component: FrameitComponent;
  let fixture: ComponentFixture<FrameitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrameitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrameitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
