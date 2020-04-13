import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <!-- ↓↓↓ adicionar os componentes criados no meu template do app component (principal) -->

    <!-- ↓↓↓ passar o valor de title (AppComponent) para o <app-header> (e depois ir em header.component.ts para ele saber que está a receber este valor - através do @Input)-->
      <app-header [title]="title"></app-header> 
  <!-- ↓↓↓ criar uma div para separar o corpo da apliação com o header -->
      <div class="container">
        <app-balance></app-balance>
        <app-income-expenses></app-income-expenses>
        <app-transactions-list></app-transactions-list>
        <app-add-transaction></app-add-transaction>
      </div>
  `,
  styles: [

    `
    
    
    .container {
      margin: 30px auto;
      width: 350px;
    }
    
    
    
    
    `
  ]
})
export class AppComponent {
  //↓↓↓ mudar o título do app
  title = 'Expense Tracker';
}
