import { Transaction } from './../../../../../expense-tracker-angular/src/app/models/transaction';
import { Component } from '@angular/core';
import { TransactionsService } from 'src/app/services/transactions.service';
//limpar OnInit o que não vamos utilizar

@Component({
  selector: 'app-balance',
  template: `
    <h4>Your Balance</h4>
    <!-- ↓↓↓ passar o balance e usar o pipe porque é uma moeda. -->
    <h1>{{balance | currency}}</h1>
  `,
  styles: []
})
export class BalanceComponent {
  //↓↓↓ Injetar a função getBalance() que está calculada no serviço injetado
  get balance(): number {
    return this.service.getBalance();
  };

  //↓↓↓ Injetar o serviço
  constructor(private service: TransactionsService) {}
}

//limpar do componente o que não vamos utilizar para mantê-los o mais simples possível.

