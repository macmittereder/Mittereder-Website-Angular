import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FranklinregionalComponent } from './franklinregional.component';

describe('FranklinregionalComponent', () => {
  let component: FranklinregionalComponent;
  let fixture: ComponentFixture<FranklinregionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FranklinregionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FranklinregionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
