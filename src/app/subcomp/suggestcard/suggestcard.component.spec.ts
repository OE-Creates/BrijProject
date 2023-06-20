import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestcardComponent } from './suggestcard.component';

describe('SuggestcardComponent', () => {
  let component: SuggestcardComponent;
  let fixture: ComponentFixture<SuggestcardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuggestcardComponent]
    });
    fixture = TestBed.createComponent(SuggestcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
