import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { Article } from '../../models/article';

@Component({
  selector: 'app-article',
  template: `
  <!-- ↓↓↓ remover a parte dos points para adicionar no html de point.component.ts. E adicionar o componente points. -->
  <app-points [votes]="article.votes"></app-points> <!-- o componente vai ter que receber os votos através do article.votes (passando valor para votes) -->

  <div class="twelve wide column">
    <a href="{{article.link}}" class="ui large header">{{article.title}}</a>
    <div class="meta">{{article.domain()}}</div>
    <ul class="ui big horizontal list voters">
      <li>
        <a href="javascript:void(0)" (click)="addVote()"> <i class="arrow up icon"></i>upvote</a>
      </li>
      <li>
        <a href="javascript:void(0)" (click)="removeVote()"><i class="arrow down icon"></i>downvote</a>
      </li>
    </ul>
  </div>
  `,
  styles: []
})
export class ArticleComponent implements OnInit {

  @HostBinding('attr.class') cssClass = "row";

  @Input()
  article: Article;

  constructor() {}

  ngOnInit(): void {}

  addVote(): void { 
    this.article.increment(); 
  }

  removeVote(): void {
    this.article.decrement();
  }
}
