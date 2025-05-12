import { Component,signal, WritableSignal } from '@angular/core';
import heroes from "./heroes.json";
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-heroes',
  imports: [FormsModule],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  a=8;
  b=10;
/*  items = signal([
    { id: 1, name: 'Elemento A' },
    { id: 2, name: 'Elemento B' },
    { id: 3, name: 'Elemento C' },
  ]);*/
  items :{id:number; name:string}[]=[];

}
