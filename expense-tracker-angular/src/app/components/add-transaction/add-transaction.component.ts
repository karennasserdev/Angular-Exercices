import { Transaction } from './../../models/transaction';
import { Component, EventEmitter, Output } from '@angular/core';
// ↑↑↑ limpar OnInit porque que não vamos utilizar
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-transaction',
  template: `
    <h3>Add Transaction</h3>
<!-- ↓↓↓ evento (submit) chama a função submit(que passa um parâmetro f) -->
<!-- ↓↓↓ variáveis de template sempre começam com # -->
<!-- ↓↓↓ *ngForm só pode ser utilizado depois de importado em NgModule!!-->
<!-- ↓↓↓ Quando enviar o valor de #f para o submit(f) ele vai buscar todos os inputs dos meu form (que tiver o ngModel) e vai entregá-los ao submit -->
    <form (submit)="submit(f)" #f="ngForm"> 
      <div class="form-control">
        <label for="text">Text</label>
        <input type="text" placeholder="Enter transaction description" name="text" ngModel>
      </div>

      <div class="form-control">
        <label for="amount">Amount <br> (negative - expense, positive - income)</label>
        <input type="number" placeholder="Enter amount" name="amount" ngModel required>
      </div>
      <!-- ↓↓↓ Se nosso form NÃO for válido, vai aparecer a error message-->
      <span *ngIf="!f.valid">{{errorMessage}}</span>
      <button class="btn">Add Transaction</button>
    </form>
  `,
  styles: []
})
export class AddTransactionComponent {

  //↓↓↓ emitir uma transaction pra quem quiser recebe-la.
  @Output()
  addTransaction = new EventEmitter<Transaction>(); 
  
  //↓↓↓ mensagem de erro que será uma string
  errorMessage: string;

  //↓↓↓ método para quando submeter o formulário (form:  NgForm)
  //↓↓↓ submit vai receber o form do tipo NgForm
  submit(form: NgForm): boolean {

     console.log(form.valid); //retorna false caso não cumpra os requisitos de preencher as duas caixas.

    //↓↓↓ Se meu form for válido (if true), fazer...
    if (form.valid) {

      //↓↓↓ criar duas variáveis individuais e buscar o valor do form para elas. (método destruction).
      const { text, amount } = form.value;

      //↓↓↓ criar uma classe transaction que recebe um texto e um amount.
      const transaction = new Transaction(text, amount);

      console.log(transaction);

      //↓↓↓ o pai do AddTransactionComponent (que no caso é o app.component) que estiver a escuta desde evento vai receber a transação que foi criada e pode geri-la como for mais conveniente.
      this.addTransaction.emit(transaction);

    } else { //... se não:

      //↓↓↓ passar um valor(string) para error message
      this.errorMessage = 'Invalid form!';

    }

    //↓↓↓ resetar o form assim que fizer a minha transaction.
    form.reset();

    //↓↓↓ o método vai retornar falso para não submeter o formulário, No caso é só receber os dados desse formulário e processá-lo.
    return false;
  }
}

//↑↑↑	limpar do componente o que não vamos utilizar para mantê-los o mais simples possível.