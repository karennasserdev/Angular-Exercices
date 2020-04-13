import { Component } from '@angular/core';
import { Article } from './models/article'; //importar o modelo article que criamos.

@Component({
  selector: 'app-root',
  template: `
  
  <form class="ui large form segment">
    <h3 class="ui header">Add Link</h3>

    <div class="field">
      <label for="title">Title:</label>
      <input name="title" #title> <!-- para atribuir uma referência colocar #, ele vai ser um nó entre o input e o addArticle() em button -->
    </div>

    <div class="field">
      <label for="link">Link:</label>
      <input name="link"#link>
    </div>

    <span>{{ errorMessage }}</span>

    <button class="ui positive right floated button" (click)="addArticle(title,link)">Submit Link</button>
  </form>

  <div class="ui grid posts">
    <p *ngIf="articles.length == 0">No articles</p> <!-- vai aparecer só quando o não tiver articles adicionados -->

  <!-- ↓↓↓ Articles list -->
  <app-article *ngFor="let article of sortedArticles()" [article]="article"></app-article> <!-- quantidade de articles consoante ao número de articles adicionados no array -->
  <!-- articles neste caso é nosso articles: Article[] que está dentro do AppComponent ↓↓↓ -->
  </div> 
  `,
  styles: []
})

export class AppComponent {
  //↓↓↓ array para guardar vários articles.
  articles: Article[] = [];

  //↓↓↓ mensagem de erro que será uma string.
  errorMessage: string;

  //↓↓↓ capturar o conteúdo dos inputs.
  //↓↓↓ atribuir uma variável a cada um dos inputs e injetá-los no click.
  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    //↑↑↑ precisa ser um booleano para no final colocarmos como falso e não fazer o refresh da página quando clicarmos em submit.
    console.log('Add article works!');
    console.log(`Title: ${title.value},Link: ${link.value}`);

    //↓↓↓ validação para nao ser adicionado uma string vazia.
    if (title.value === '' || link.value === '') {
      //↓↓↓ mensagem de erro.
      this.errorMessage = 'Title and link is required!';
      return false;
    }

    //↓↓↓ Article neste caso é o model que criamos e é um array do objeto.
    const article = new Article(title.value, link.value);

    //↓↓↓ dizer aos articles que é preciso fazer um push com os itens do objeto.
    this.articles.push(article);

    //↓↓↓ para não manter a mensagem de erro quando um artigo é adicionado ou quando o article é uma string vazia, a error massage tem que voltar null.
    this.errorMessage = null;

    //↓↓↓ após adicionar os articles é preciso limpar os campos do title e link.
    title.value = null;
    link.value = null;

    console.log(this.articles);

    return false;
  }

  //↓↓↓ ordenar a lista de artigos por ordem de pontuação.
  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }
}
