import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphgameComponent } from './graphgame.component';

describe('GraphgameComponent', () => {
  let component: GraphgameComponent;
  let fixture: ComponentFixture<GraphgameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphgameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphgameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
