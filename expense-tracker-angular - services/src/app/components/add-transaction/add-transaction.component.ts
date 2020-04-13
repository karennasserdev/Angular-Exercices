import { TransactionsService } from './../../services/transactions.service';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { Transaction } from 'src/app/models/transaction';
//↑↑↑ limpar OnInit porque que não vamos utilizar

@Component({
  selector: 'app-add-transaction',
  template: `
    <h3>Add Transaction</h3>
    <!-- A partir do momento adicione o ReactiveFormsModule eu não posso ter nenhum form sem um FormGroup associado. -->
    <form [formGroup] = "form" (submit)="submit()"> <!-- Adicionar o evento submit sem passar nada pois ja tem o form no componente-->
      <div class="form-control">
        <label for="text">Text</label>
        <input type="text" placeholder="Enter transaction description" formControlName="text"> <!--substituir o name por formControlName-->
      </div>

      <div class="form-control">
        <label for="amount">Amount <br> (negative - expense, positive - income)</label>
        <input type="number" placeholder="Enter amount" formControlName="amount"> <!--substituir o name por formControlName-->
      </div>
      <button class="btn">Add Transaction</button>
    </form>
  `,
  styles: [
    `
    label {
      display: inline-block;
      margin: 10px 0;
    }

    input[type='text'],
    input[type='number'] {
      border: 1px solid #dedede;
      border-radius: 2px;
      display: block;
      font-size: 16px;
      padding: 10px;
      width: 100%;
    }

    .btn {
      cursor: pointer;
      background-color: #9c88ff;
      box-shadow: var(--box-shadow);
      color: #fff;
      border: 0;
      display: block;
      font-size: 16px;
      margin: 10px 0 30px;
      padding: 10px;
      width: 100%;
    }

    .btn:focus {
      outline: 0;
    }
    `
  ]
})

export class AddTransactionComponent {

  //↓↓↓ Se usar o ReactFormModule todos os forms tem que ter um forms group associado. É este form que vai gerir todo o formulário (dados, interações...).
  //↓↓↓ tem que ter as intâncias que definem o FormGroup
  form: FormGroup = new FormGroup({
    //↓↓↓ cada um dos inputs tem que ser uma instância de FormControl.
    //↓↓↓ para saber se o nosso formulário e válido.

    text: new FormControl(null, Validators.required),
    amount: new FormControl(null, Validators.required)
    //↑↑↑ Dentro de FormControl o primeiro campo é o valor que aparece por default na caixa, no caso não aparece nada, por isso é nulo. O segundo campo são os validadores, posso receber um validador ou um array de validadores, neste caso queremos que os validadores sejam required.  o formulário só é válido quando for preenchido e ter conteúdo. Por exemplo se o validator.minLength(3), quer dizer que o formulário só é válido se tiver 3 caracteres ou mais.
  });


  //private service: TransactionsService; <- OPÇÃO 1

  //↓↓↓ chamar o serviço neste componente através do injetor de dependências do Angular
  //↓↓↓ receber um serviço do tipo TransactionsService e o angular sabe onde está esse TransactionsService vai ser se tem algum serviço criado, se tiver entregue aqui. Se não tiver nenhum service criado, ele vai criar e entregar na mesma.
  constructor(
    private service: TransactionsService
    /* OPÇÃO 2: colocar diretamente no service do construtor declarado o PRIVATE antes ↑↑↑*/)

  //↑↑↑ Ao injetar o transaction service, não é possivel aceder o service neste momento, ele só está disponível no construtor.

  //↑↑↑ Há duas maneira de aceder o service: 
  //OPÇÃO 1: Fazer uma propriedade private service (acima) e injetar qual serviço é recebido dentro de constructor ↓↓↓. 
  {      //this.service = service; <- OPÇÃO 1
  }


  submit(): boolean {
    //↓↓↓ para saber se o nosso formulário e válido.
    console.log(this.form.valid);
    console.log(this.form.value);
    //↓↓↓ Se for válido (true)...a
    if (this.form.valid) {
      //↓↓↓ receber os valores de text e amount de form
      const { text, amount } = this.form.value;
      //↓↓↓ fazer a transaction com esses valores.
      const transaction = new Transaction(text, amount);
      //adicionar a transaction ao service.
      this.service.addTransaction(transaction);

      //resetar o formulário.
      this.form.reset();

    }
    return false;
  }
}

//↑↑↑ limpar do componente o que não vamos utilizar para mantê-los o mais simples possível.
