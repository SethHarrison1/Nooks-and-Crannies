import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualbasicComponent } from './visualbasic.component';

describe('VisualbasicComponent', () => {
  let component: VisualbasicComponent;
  let fixture: ComponentFixture<VisualbasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualbasicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualbasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
