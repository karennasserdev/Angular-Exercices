import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Transaction } from 'src/app/models/transaction';
//↑↑↑ limpar OnInit porque que não vamos utilizar

@Component({
  selector: 'app-transactions-list',
  template: `
    <h3>History</h3>
    <ul class="list">
      <p *ngIf="transactions.length == 0">No transactions added</p>
      <!-- ↓↓↓ como o app transaction é um componente a parte (e mutável), vamos chamá-lo aqui -->
      <!-- ↓↓↓ passar a transaction para o app-transaction-->
      <app-transaction 
      *ngFor="let transaction of transactions" 
      [transaction]="transaction" 
      (removeTransaction)="onRemoveTransaction($event)">
    </app-transaction>
    </ul>
  `,
  styles: []
})
export class TransactionsListComponent {

  //está a receber as transactions e enviar a lista
  @Input()
  transactions: Transaction[] = [];

  //dizer ao appcomponent que nossas transactions mudaram
  @Output()
  deleteTransaction = new EventEmitter<number>();

  onRemoveTransaction(id: number) : void {
    this.deleteTransaction.emit(id);
  }

}
//↑↑↑ limpar do componente o que não vamos utilizar para mantê-los o mais simples possível.
