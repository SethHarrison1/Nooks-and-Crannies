import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';

@Component({
 selector: 'app-scala',
  templateUrl: './scala.component.html',
  styleUrls: ['./scala.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ScalaComponent implements OnInit, OnDestroy {

  constructor() { }

  
  ngOnInit() {
    document.body.classList.add('scala-body');
    // OR you can Add inline style css with the help of code below
    // this._document.body.style.background = '#fff';
}
  ngOnDestroy() {
    // remove the class form body tag
    document.body.classList.add('scala-body');
  }

}
