import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../models/article';

@Component({
  selector: 'app-article-list',
  template: `
  <div class="ui grid posts">
      <p *ngIf="articles.length == 0">No articles</p>
      <app-article *ngFor="let article of sortedArticles()" [article]="article"></app-article> 
    </div>
  `,
  styles: []
})
export class ArticleListComponent implements OnInit {
  
  //este array é um input, quem tiver este componente (app.component) pode colocar informação dentro deste Article.
  @Input()
  articles: Article[] = [];
     
  constructor() { }

  ngOnInit(): void { }


  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }

}
