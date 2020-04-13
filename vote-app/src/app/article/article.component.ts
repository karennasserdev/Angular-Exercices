import { Component, OnInit, HostBinding, Input } from '@angular/core'; //automaticamente o Angular importa o HostBinging e Input.
import { Article } from '../models/article'; //importar o model article que criamos.

@Component({
  selector: 'app-article',
  template: `
  <div class="four wide column center aligned votes">
    <div class="ui statistic">
      <div class="value">{{ article.votes }}</div> <!-- databind {{ article.votes }} -->
      <div class="label">Points</div>
    </div>
  </div>

  <div class="twelve wide column">

    <a href="{{article.link}}" class="ui large header">{{article.title}}</a>
    <div class="meta">{{article.domain()}}</div><!-- databind {{ article.votes }} consegue chamar uma função -->
    <ul class="ui big horizontal list voters">
      <li>
            <!-- javascript:void(0) não interpreta <a> como um link -->
        <a href="javascript:void(0)" (click)="addVote()" class="arrow up icon">upvote</a>
      </li>
      <li>
        <a href="javascript:void(0)" (click)="removeVote()" class="arrow down icon">downvote</a>
      </li>
    </ul>
  </div>
  `,
  styles: []
})
export class ArticleComponent implements OnInit {

  //↓↓↓ cada <app-article> passou a ter a classe "row" aplicada, através do HostBingind e na atribuição através do 'attr.class'.
  @HostBinding('attr.class') cssClass = "row";

 
  // @Input()
  // title: string;
  // @Input()
  // link: string;
  // ↓↓↓ quando atribuimos um valor a uma propriedade não precisamos definir qual tipo de valor ela vai receber.
  // @Input()
  // votes = 0;

  // ↑ os inputs acima não são mais necessários porque o input abaixo ↓ já está chamando a classe Article que criamos como modelo na pasta models (que tem essas propriedades: title, link e votes).
  @Input()
  article: Article;

  constructor() {}

  ngOnInit(): void {}

  //↓↓↓ duas funções que cada vez que clico em upvote ou downvote, incremento ou decremento o valor da propriedade e com o databiding vai mudar automaticamente esse valor no template.
  addVote(): void { //void: não retorna valores.

    // this.votes++; //incrementar o valor de votes.

    this.article.increment(); // como importamos a classe Article, vamos chamar a função increment (que esta na própria classe) que faz a mesma coisa que addVote fazia anteriormente.
  }

  removeVote(): void {//void: não retorna valores.

    // this.votes--;//decrementar o valor de votes.

    this.article.decrement();// como importamos a classe Article, vamos chamar a função decrement (que esta na própria classe) que faz a mesma coisa que addVote fazia anteriormente.
  }
}
