import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
//↑↑↑ importar o módulo

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BalanceComponent } from './components/balance/balance.component';
import { IncomeExpensesComponent } from './components/income-expenses/income-expenses.component';
import { TransactionsListComponent } from './components/transactions-list/transactions-list.component';
import { AddTransactionComponent } from './components/add-transaction/add-transaction.component';
import { TransactionComponent } from './components/transaction/transaction.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BalanceComponent,
    IncomeExpensesComponent,
    TransactionsListComponent,
    AddTransactionComponent,
    TransactionComponent
  ],
  imports: [
    BrowserModule,
    //↓↓↓ importar o módulo:
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
