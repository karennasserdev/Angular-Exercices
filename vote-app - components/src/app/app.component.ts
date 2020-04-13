import { Component } from '@angular/core';
import { Article } from './models/article';

@Component({
  selector: 'app-root',
  template: `
  <!--↓↓↓ passando o valor de title para o html-->
  <app-navbar title="Angular Votes"></app-navbar> <!--adicionar o componente navbar aqui-->
  
  <div class="ui main text container"> <!--adicionar um div com as classes-->

    <!-- ↓↓↓ remover a parte do form para adicionar no html de article-form.component.ts. E adicionar o componente app-article-form. -->
    <!-- ↓↓↓ $event significa que quando eu receber aquele evento eu vou injetar no método o que o evento me manda no caso Article-->
    <app-article-form (articleCreated)="onArticleCreated($event)"></app-article-form>

      <!-- ↓↓↓ removi o array de articles para colocar em article-list.component.ts-->
   <app-article-list [articles]="articles"></app-article-list>  <!-- os articles dentro dentro do article list serão iguais aos articles dentro do app component. -->
  </div>
  `,
  styles: []
})

export class AppComponent {

//↓↓↓ criar uma propriedade articles do tipo article array.
articles: Article[] = [
  //articles para teste
  // new Article ('Angular', 'https://angular.io'),
  // new Article ('Tour of Heroes', 'https://angular.io/tutorial')
]

  onArticleCreated(article: Article):void {
    console.log('onArticleCreated', article);

    if (this.articles.find(a => article.title === a.title && article.link === a.link)) {
      alert('Article already on list');
      return;
    }

    //↓↓↓ cada vez que eu crio um article no meu form eu quero fazer um push desse mesmo article no meu array de articles.
    this.articles.push(article);
  }
}



