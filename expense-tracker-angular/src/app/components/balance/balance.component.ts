import { Component, Input } from '@angular/core';
//↑↑↑ limpar OnInit porque que não vamos utilizar

@Component({
  selector: 'app-balance',
  template: `
    <h4>Your Balance</h4>
    <!-- ↓↓↓ passar o balance e usar o pipe porque é uma moeda -->
    <h1>{{balance | currency}}</h1>
  `,
  styles: []
})
export class BalanceComponent {
  
  @Input()

  //↓↓↓ definir o valor inicial do balance como zero
  balance: number =0 ;

}
//↑↑↑ limpar do componente o que não vamos utilizar para mantê-los o mais simples possível.

