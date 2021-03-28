import { ComponentFixture, OnInit, OnDestroy, ViewEncapsulation, TestBed } from '@angular/core/testing';

import { AbapComponent } from './abap.component';

describe('AbapComponent', () => {
  let component: AbapComponent;
  let fixture: ComponentFixture<AbapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbapComponent ]
    })
    .compileComponents();

    ngOnInit() {
    this._document.body.classList.add('abap-body');
    // OR you can Add inline style css with the help of code below
    // this._document.body.style.background = '#fff';
}
  ngOnDestroy() {
    // remove the class form body tag
    this._document.body.classList.add('abap-body');
  }
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

