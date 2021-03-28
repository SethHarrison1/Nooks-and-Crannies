import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-haskell',
  templateUrl: './haskell.component.html',
  styleUrls: ['./haskell.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class HaskellComponent implements OnInit, OnDestroy {

  constructor() { }

  
  ngOnInit() {
    document.body.classList.add('haskell-body');
    // OR you can Add inline style css with the help of code below
    // this._document.body.style.background = '#fff';
}
  ngOnDestroy() {
    // remove the class form body tag
    document.body.classList.add('haskell-body');
  }

}