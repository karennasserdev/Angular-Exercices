import { Component, Input } from '@angular/core';
//↑↑↑ limpar OnInit porque que não vamos utilizar

@Component({
  selector: 'app-income-expenses',
  template: `
    <div class="inc-exp-container">
      <div>
        <h4>Income</h4>
        <!-- ↓↓↓ passar o income e usar o pipe porque é uma moeda. -->
        <p class="money plus">+{{ income | currency }}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <!-- ↓↓↓ passar o expense e usar o pipe porque é uma moeda. -->
        <p class="money minus">-{{ expense | currency }}</p>
      </div>
    </div>  
  `,
  styles: []
})
export class IncomeExpensesComponent {

 //↓↓↓ definir o income e expense que é um número e é igual a zero. Depois iremos substituí -los
 @Input() income: number = 0;
 @Input() expense: number = 0;

  constructor() { }
}

//↑↑↑ limpar do componente o que não vamos utilizar para mantê-los o mais simples possível.


