import { Component, signal, computed, effect } from '@angular/core';
import { DecimalPipe } from '@angular/common';
//pipe
@Component({
  selector: 'app-signals',
  imports: [DecimalPipe],
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

  //Computed o señales computadas o variables computadas
  porcentaje=computed(()=>this.contador()*0.20);

  firstName =signal('John');
  lastName = signal('Doe');

  fullName = computed(()=> `${this.firstName()} ${this.lastName()}`);

  //effect
  myeffect= effect(()=>{
    console.log(`Valor del contador: ${this.contador()}`);
  });
}
