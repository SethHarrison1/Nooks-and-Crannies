import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerlComponent } from './perl.component';

describe('PerlComponent', () => {
  let component: PerlComponent;
  let fixture: ComponentFixture<PerlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
