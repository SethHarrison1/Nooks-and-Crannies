import { ComponentFixture, TestBed } from '@angular/core/testing';

import { App.Page2.HtmlComponent } from './app.page2.html.component';

describe('App.Page2.HtmlComponent', () => {
  let component: App.Page2.HtmlComponent;
  let fixture: ComponentFixture<App.Page2.HtmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ App.Page2.HtmlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(App.Page2.HtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
