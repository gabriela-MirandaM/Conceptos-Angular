import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.component.html'
})
export class SignalsComponent {
  contador = signal<number>(0);

  resta(){
    this.contador.update(valorActual => valorActual -1);
  }
  suma(){
    this.contador.update(valorActual => valorActual + 1);
  }
  reset(){
    this.contador.update(valorActual => valorActual - valorActual);
  }
}
