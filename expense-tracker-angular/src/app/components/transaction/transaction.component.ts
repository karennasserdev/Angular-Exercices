import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Transaction } from 'src/app/models/transaction';
//↑↑↑ limpar OnInit porque que não vamos utilizar

@Component({
  selector: 'app-transaction',
  template: `
    <!-- ↓↓↓ aplicar a [classe.minus] quando... -->
    <li class="minus" [class.minus]="transaction.amount < 0" [class.plus]="transaction.amount >=0">

    <!-- ↓↓↓ receber os valores de text e amount, em amount usar o pipe currency porque é moeda -->
      {{transaction.text}}
      <span>{{transaction.amount | currency }}</span>
      <button class="delete-btn" (click)="delete()">x</button>
    </li>
  `,
  styles: []
})
export class TransactionComponent {


  @Input()
  transaction: Transaction;


  //↓↓↓ emitir um number pra quem quiser recebe-lo
  @Output()
  removeTransaction = new EventEmitter<number>();


  //↓↓↓ emitir um evento com o id de transação que quero remover
  delete(): void {
    if (confirm (`Delete "${this.transaction.text}"?`)) {
      this.removeTransaction.emit(this.transaction.id);
    }
  }
}
//↑↑↑ limpar do componente o que não vamos utilizar para mantê-los o mais simples possível.
