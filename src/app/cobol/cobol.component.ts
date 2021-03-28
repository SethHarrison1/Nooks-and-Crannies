import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-cobol',
  templateUrl: './cobol.component.html',
  styleUrls: ['./cobol.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CobolComponent implements OnInit, OnDestroy {

  constructor() { }

  
  ngOnInit() {
    document.body.classList.add('cobol-body');
    // OR you can Add inline style css with the help of code below
    // this._document.body.style.background = '#fff';
}
  ngOnDestroy() {
    // remove the class form body tag
    document.body.classList.add('cobol-body');
  }

}
