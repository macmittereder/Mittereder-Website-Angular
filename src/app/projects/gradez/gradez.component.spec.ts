import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradezComponent } from './gradez.component';

describe('GradezComponent', () => {
  let component: GradezComponent;
  let fixture: ComponentFixture<GradezComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradezComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GradezComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
