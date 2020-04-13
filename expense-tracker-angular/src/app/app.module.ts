import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//↑↑↑ importar o formsModule do Angular Forms

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

    //↓↓↓ importar o formsModule do Angular Forms. Assim qualquer componente que pertence ao app-component pode utilizar as ferramentas de formsModule.
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
