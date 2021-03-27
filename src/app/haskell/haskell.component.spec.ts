import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaskellComponent } from './haskell.component';

describe('HaskellComponent', () => {
  let component: HaskellComponent;
  let fixture: ComponentFixture<HaskellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HaskellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HaskellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
