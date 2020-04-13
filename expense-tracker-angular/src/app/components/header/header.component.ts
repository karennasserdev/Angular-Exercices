import { Component, Input } from '@angular/core';
//↑↑↑ limpar OnInit porque que não vamos utilizar

@Component({
  selector: 'app-header',
  template: `
  <!-- ↓↓↓ passar o title para o template, para ele ir buscar o valor através do @Input -->
  <h2>{{title}}</h2>
  `,
  styles: []
})
export class HeaderComponent {

  //↓↓↓ temos receber o valor de title (de AppComponent) através do input, sabemos que o title é uma string.
  @Input()
  title: string;

}
//↑↑↑ limpar do componente o que não vamos utilizar para mantê-los o mais simples possível.
