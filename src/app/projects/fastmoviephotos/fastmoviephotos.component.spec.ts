import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FastmoviephotosComponent } from './fastmoviephotos.component';

describe('FastmoviephotosComponent', () => {
  let component: FastmoviephotosComponent;
  let fixture: ComponentFixture<FastmoviephotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FastmoviephotosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FastmoviephotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
