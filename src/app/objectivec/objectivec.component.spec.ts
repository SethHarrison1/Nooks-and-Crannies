import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectivecComponent } from './objectivec.component';

describe('ObjectivecComponent', () => {
  let component: ObjectivecComponent;
  let fixture: ComponentFixture<ObjectivecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjectivecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectivecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
