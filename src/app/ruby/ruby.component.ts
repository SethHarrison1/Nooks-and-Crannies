import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-ruby',
  templateUrl: './ruby.component.html',
  styleUrls: ['./ruby.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RubyComponent implements OnInit, OnDestroy {

  constructor() { }

  
  ngOnInit() {
    document.body.classList.add('ruby-body');
    // OR you can Add inline style css with the help of code below
    // this._document.body.style.background = '#fff';
}
  ngOnDestroy() {
    // remove the class form body tag
    document.body.classList.add('ruby-body');
  }

}
