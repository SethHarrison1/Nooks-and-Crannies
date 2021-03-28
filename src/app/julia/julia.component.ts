import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-julia',
  templateUrl: './julia.component.html',
  styleUrls: ['./julia.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class JuliaComponent implements OnInit, OnDestroy {

  constructor() { }

  
  ngOnInit() {
    document.body.classList.add('julia-body');
    // OR you can Add inline style css with the help of code below
    // this._document.body.style.background = '#fff';
}
  ngOnDestroy() {
    // remove the class form body tag
    document.body.classList.add('julia-body');
  }

}
