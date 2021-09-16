import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordsandmusicComponent } from './wordsandmusic.component';

describe('WordsandmusicComponent', () => {
  let component: WordsandmusicComponent;
  let fixture: ComponentFixture<WordsandmusicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordsandmusicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WordsandmusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
