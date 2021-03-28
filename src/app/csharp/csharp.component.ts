
import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-csharp',
  templateUrl: './csharp.component.html',
  styleUrls: ['./csharp.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CsharpComponent implements OnInit, OnDestroy {

  constructor() { }

  
  ngOnInit() {
    document.body.classList.add('csharp-body');
    // OR you can Add inline style css with the help of code below
    // this._document.body.style.background = '#fff';
}
  ngOnDestroy() {
    // remove the class form body tag
    document.body.classList.add('csharp-body');
  }

}