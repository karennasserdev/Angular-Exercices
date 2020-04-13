import { Component } from '@angular/core';
import { Transaction } from './models/transaction';
//↑↑↑ limpar OnInit porque que não vamos utilizar

@Component({
  selector: 'app-root',
  template: `
  <!-- ↓↓↓ adicionar os componentes criados no meu template do app component (principal) -->
  <!-- ↓↓↓ passar o valor de title (AppComponent) para o <app-header> (e depois ir em header.component.ts para ele saber que está a receber este valor - através do @Input)-->
  <app-header [title]="title"></app-header> 
  <!-- ↓↓↓ criar uma div para separar o corpo da aplicação com o header -->
  <div class="container">
    <app-balance [balance]="balance"></app-balance>
    <!-- ↓↓↓ enviar o expense e o income -->
    <app-income-expenses [expense]="expense" [income]="income"></app-income-expenses>
    <!-- ↓↓↓ entregar o transactions a quem precisa delas para calcular coisas. A transaction-list vai precisar receber para mostrar na lista o ecrã. -->
    <app-transactions-list [transactions]="transactions" (deleteTransaction)="onDeleteTransaction($event)"></app-transactions-list>
    <!-- ↓↓↓ passa a receber o evento addTransaction que vai executar onAddTransaction e receber o objeto evento que é uma transaction -->
    <app-add-transaction (addTransaction)="onAddTransaction($event)"></app-add-transaction>
  </div>
  `,
  styles: []
})


export class AppComponent {

  //↓↓↓ mudar o título do app
  title = 'Expense Tracker';

  // ↓↓↓ para poder gerir todas as transactions vou ter uma transaction que é um array Transaction que por default é um array vazio.
  transactions: Transaction[] = [];

  balance: number = 0; 
  expense: number = 0;
  income: number = 0;

  // ↓↓↓ objeto que recebe um evento que é uma transaction do tipo Transaction
  onAddTransaction(transaction: Transaction): void {

    // ↓↓↓ adicionar as minhas transactions uma transaction
    this.transactions.push(transaction);

    console.log(this.transactions);

    //sempre que eu adiciono uma transaction é preciso recalcular o valores e balance,expense e income.
    this.updateValues();
  }

  onDeleteTransaction(id: number): void {
    this.transactions = this.transactions.filter(transaction => transaction.id != id);
    //quando as transactions forem deletadas, recalcular e atualizar os valores do balance, income e expense.
    this.updateValues();
  }

  // funcao que atualiza os valores dee balance, expense e income.
  updateValues(){

    // ↓↓↓ array so com os amounts
    const amounts = this.transactions.map(transaction => transaction.amount);

      
    this.balance =  amounts.reduce((acc,item) => acc + item, 0);

    // ↓↓↓ filtrar income e fazer somatório dos que forem maior que zero 
    this.income = amounts.filter(item => item > 0).reduce((acc, item) => acc + item, 0);

    // ↓↓↓ filtrar expense e fazer somatório dos que forem menor que zero (absoluto) 
    this.expense = amounts.filter(item => item < 0).reduce((acc, item) => acc + Math.abs(item), 0);
  }
}
//↑↑↑ limpar do componente o que não vamos utilizar para mantê-los o mais simples possível.

