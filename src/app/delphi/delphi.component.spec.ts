import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelphiComponent } from './delphi.component';

describe('DelphiComponent', () => {
  let component: DelphiComponent;
  let fixture: ComponentFixture<DelphiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelphiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DelphiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
