import { TransactionsService } from './../../services/transactions.service';
import { Component } from '@angular/core';
//limpar OnInit o que não vamos utilizar

@Component({
  selector: 'app-income-expenses',
  template: `
    <div class="container">
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
  styles: [

    `
    .container {
      background-color: #fff;
      box-shadow: var(--box-shadow);
      padding: 20px;
      display: flex;
      justify-content: space-between;
      margin: 20px 0;
    }

    .container > div {
      flex: 1;
      text-align: center;
    }

    .container > div:first-of-type {
      border-right: 1px solid #dedede;
    }

    .money {
      font-size: 20px;
      letter-spacing: 1px;
      margin: 5px 0;
    }

    .money.plus {
      color: #2ecc71;
    }

    .money.minus {
      color: #c0392b;
    }
    `



  ]
})
export class IncomeExpensesComponent {
  //↓↓↓ Injetar a função getIncome() e getExpense() que estão calculadas no serviço injetado
  get income(): number {
    return this.service.getIncome();
  };

  get expense(): number {
    return this.service.getExpense();
  };

  //↓↓↓ Injetar o serviço
  constructor(private service: TransactionsService) { }
}

//limpar do componente o que não vamos utilizar para mantê-los o mais simples possível.


