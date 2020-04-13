import { Component, OnInit, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-points',
  template: `

      <div class="ui statistic">
        <div class="value">{{ votes }}</div>
        <div class="label">Points</div>
      </div>
  
  `,
  styles: []
})
export class PointsComponent implements OnInit {

  @HostBinding('attr.class')
 cssClasses = 'four wide column center aligned votes';

  //↓↓↓ criar a propriedade votes para ser um número e linkar como template.
  @Input()
  votes: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
