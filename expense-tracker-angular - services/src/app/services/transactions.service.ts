import { Injectable } from '@angular/core';
import { Transaction } from '../models/transaction';

//↓↓↓ decorator injectable, quer dizer que pode ser injetado em qualquer outra classe 

@Injectable({
  //↓↓↓ está disponível para todos os módulos da minha aplicação
  providedIn: 'root'
})


//↓↓↓ este serviço me dá uma lista de transactions e permite adicionar uma transaction a essa lista.
export class TransactionsService {
  //↓↓↓ o serviço vai guardar/gerir tudo o que são dados da aplicação, no caso teremos uma propriedade que é privada.
  //↓↓↓ sempre que eu injetar este serviço num qualquer componente, vai ter acesso ao array transactions e vai ter sempre a mesma instância nos outros componente.
  private transactions: Transaction[] = [];
  //↑↑↑ o typescript permite ter um modificador de acesso, dizer de onde as propriedades e métodos podem ser acedidos. Se não colocar nada é porque é público (qualquer sitio que tiver uma instância de transactions service pode aceder a essa propriedade ou método). Se for private significa ue só dentro desta classe essa propriedade pode ser acedida.


  //↓↓↓ se tiver necessidade posso injetar outras dependências no constructor.
  constructor() { }

  //↓↓↓ adicionar métodos
  //↓↓↓ este método retorna um array de transactions.
  getTransactions(): Transaction[] {
    return this.transactions;
  }

  //↓↓↓ este método recebe uma transaction como parâmetro, não retorna nada mas faz o push desse parâmetro.
  addTransaction(transaction: Transaction): void {
    this.transactions.push(transaction);
  }

  //↓↓↓ métodos para calcular os incomes e expense e remover os itens da lista
  removeTransaction(id: number): void {
    this.transactions = this.transactions.filter(transaction => transaction.id != id);
  }

  getBalance(): number {
    //↓↓↓ mapear as transações para um novo array so com os amounts, e depois fazer um reduce para somar todos os valores e retornar no final.
    return this.transactions.map(transaction => transaction.amount).reduce((acc, amount) => acc + amount, 0);
  }

  getIncome(): number {
    //↓↓↓ mapear as transações para um novo array so com os amounts, filtrar os valores superiores a 0 e depois fazer um reduce para somar todos os valores e retornar no final.
    return this.transactions.map(transaction => transaction.amount).filter(amount => amount > 0).reduce((acc, amount) => acc + amount, 0);
  }

  getExpense(): number {
    //↓↓↓ mapear as transações para um novo array so com os amounts, filtrar os valores inferiores a 0 e depois fazer um reduce para somar todos os valores e retornar no final.
    return this.transactions.map(transaction => transaction.amount).filter(amount => amount < 0).reduce((acc, amount) => acc + Math.abs(amount), 0);
  }



}

//os serviços que devem calcular os incomes e expenses, não os componentes!!
  