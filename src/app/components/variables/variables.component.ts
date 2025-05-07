import { Component, EventEmitter } from '@angular/core';
import {FormsModule} from '@angular/forms';


@Component({
  selector: 'app-variables',
  imports: [FormsModule],
  templateUrl: './variables.component.html',
  styleUrl: './variables.component.css'
})
export class VariablesComponent {
  //one-way Data Binding
  myTitle: string = `Hola soy la variable myTitle`;

  saldo: number = 123.32;
  // Property Binding
  link = 'https://v7.angular.cn/assets/images/logos/angular/angular.svg'
  // Event Binding
  //Creando un evento de tipo EventEmitter local
  textAreaValue="";
  customSubmit: EventEmitter<string> = new EventEmitter();

  constructor(){
    //suscribirme al evento paera mostrar el valor a emitir
    this.customSubmit.subscribe((value:string)=>{
      console.log('Valor emitido desde textarea:', value);
    });
  }
  onSubmit(){
    this.customSubmit.emit(this.textAreaValue);
  }

  // Two-Way Data Binding

  review = "Default review";
  onSubmitReview() {
    this.review = "Default review";
  }
}
