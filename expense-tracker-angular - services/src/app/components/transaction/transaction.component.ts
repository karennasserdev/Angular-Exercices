import { Transaction } from './../../../../../expense-tracker-angular/src/app/models/transaction';
import { Component, Input } from '@angular/core';
import { TransactionsService } from 'src/app/services/transactions.service';
//↑↑↑ limpar OnInit porque que não vamos utilizar

@Component({
  selector: 'app-transaction',
  template: `
    <li [class.minus] ="transaction.amount < 0" [class.plus]="transaction.amount >= 0">
      {{transaction.text}}
      <span>{{transaction.amount | currency }}</span>
      <button class="delete-btn" (click) ="delete()">x</button>
    </li>
  `,
  styles: [
    `
    li {
      background-color: #fff;
      box-shadow: var(--box-shadow);
      color: #333;
      display: flex;
      justify-content: space-between;
      position: relative;
      padding: 10px;
      margin: 10px 0;
    }

  
    .list li.plus {
      border-right: 5px solid #2ecc71;
    }

    .list li.minus {
      border-right: 5px solid #c0392b;
    }

     .delete-btn {
      cursor: pointer;
      background-color: #e74c3c;
      border: 0;
      color: #fff;
      font-size: 20px;
      line-height: 20px;
      padding: 2px 5px;
      position: absolute;
      top: 50%;
      left: 0;
      transform: translate(-100%, -50%);
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .delete-btn:focus {
      outline: 0;
    } 

    li:hover .delete-btn {
      opacity: 1;
    }
    `
  ]
})
export class TransactionComponent {

  @Input()
  transaction: Transaction;

  

  //↓↓↓ Injetar o serviço
  constructor(private service: TransactionsService) {}

  //↓↓↓ Injetar a função removeTransaction() que está calculada no serviço injetado
  delete(): void {
    if (confirm(`Remove "${this.transaction.text}" ? `)) {
      this.service.removeTransaction(this.transaction.id);
    }
  };

}

//↑↑↑ limpar do componente o que não vamos utilizar para mantê-los o mais simples possível.
