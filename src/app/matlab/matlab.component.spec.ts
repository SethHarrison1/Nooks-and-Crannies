import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatlabComponent } from './matlab.component';

describe('MatlabComponent', () => {
  let component: MatlabComponent;
  let fixture: ComponentFixture<MatlabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatlabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatlabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
