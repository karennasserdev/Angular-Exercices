import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
  <div class="ui menu">
    <div class="ui container">
      <div class="header item borderless">
        <h1 class="ui header">{{title}}</h1>
      </div>
    </div>
  </div>
  `,
  styles: []
})
export class NavbarComponent implements OnInit {
  //↓↓↓ para reutilizar a navbar com vários títulos diferentes.
  @Input()
  title: string;

  constructor() { }

  ngOnInit(): void {
  }

}
