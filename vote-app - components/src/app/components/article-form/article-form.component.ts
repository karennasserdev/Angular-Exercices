import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Article } from 'src/app/models/article'; //importar o model article que criamos.

@Component({
  selector: 'app-article-form',
  template: `    
  <form class="ui large form segment">
    <h3 class="ui header">Add Link</h3>

    <div class="field">
      <label for="title">Title:</label>
      <input name="title" #title>
    </div>

    <div class="field">
      <label for="link">Link:</label>
      <input name="link"#link>
    </div>

    <span>{{ errorMessage }}</span>
    <!-- ↓↓↓ quando adicionarmos um componente article, vai emitir um evento pro app-component apanhar. -->
    <button class="ui positive right floated button" (click)="addArticle(title,link)">Submit Link</button>
  
  </form>`,
  styles: []
})
export class ArticleFormComponent implements OnInit {

  errorMessage: string;

  //↓↓↓ cada vez que um artigo e criado eu crio uma propriedade de output.
  @Output() //↓↓↓ o evento se chamará Article.
  articleCreated = new EventEmitter<Article>(); //sempre quando criamos é comum dizer O QUE é que ele que vai transportar.

  constructor() { }

  ngOnInit(): void {
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log('Add article works!');
    console.log(`Title: ${title.value},Link: ${link.value}`);

    if (title.value === '' || link.value === '') {
      this.errorMessage = 'Title and link is required!';
      return false;
    }

    const article = new Article(title.value, link.value);

    //↓↓↓ dizer aos articles que é preciso fazer um push com os itens do objeto article.
    this.articleCreated.emit(article);

    this.errorMessage = null;
    title.value = null;
    link.value = null;

    return false;
  }
}
