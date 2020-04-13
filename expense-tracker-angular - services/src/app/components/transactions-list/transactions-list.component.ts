import { TransactionsService } from './../../services/transactions.service';
import { Component } from '@angular/core';
import { Transaction } from 'src/app/models/transaction';
//limpar OnInit o que não vamos utilizar

@Component({
  selector: 'app-transactions-list',
  template: `
    <h3>History</h3>
    <ul class="list">
    <!-- ↓↓↓ como o app transaction é um componente a parte (e mutável), vamos chamá-lo aqui -->
      <app-transaction *ngFor="let transaction of transactions" [transaction]="transaction"></app-transaction>
    </ul>
  `,
  styles: [
    `
    .list {
      list-style-type: none;
      padding: 0;
      margin-bottom: 40px;
    }
    
    `
  ]
})
export class TransactionsListComponent {

  //↓↓↓ para ter isto sempre atualizado, utilizar o metodo get pois sempre que o serviço mudar o get vai voltar a dar informações ao template. Esse getter vai devolver um array de Transaction e repassar para o serviço.
  get transactions(): Transaction[] {
    return this.service.getTransactions();
  }
  //↓↓↓ criar um construtor para receber o service 
  constructor(private service: TransactionsService){}
}

//limpar do componente o que não vamos utilizar para mantê-los o mais simples possível.
