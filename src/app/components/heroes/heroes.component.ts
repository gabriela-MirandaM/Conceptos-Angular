import { Component,signal, WritableSignal } from '@angular/core';
import heroes from "./heroes.json";
import { CreateHeroe, Heroe } from './hereos';
import { FormsModule } from '@angular/forms';
import { log } from 'console';
@Component({
  selector: 'app-heroes',
  imports: [FormsModule],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  heroesList: WritableSignal<Heroe[]>;
  newHeroe:CreateHeroe;

  constructor(){
    this.heroesList = signal<Heroe[]>(heroes);
    this.newHeroe={};
  }

  agregarHeroe(){
    console.log("Nuevo Heroe", this.newHeroe);

    if(!this.newHeroe.id){
      console.warn("No se puede agregar o actulizar un héroe sin ID");
      return;
    }
    const currentHeroes = this.heroesList();
    const heroeIndex= currentHeroes.findIndex(h => h.id === this.newHeroe.id);

    if(heroeIndex !== -1){
      //El héroe existe, actualizar datos
      const updateHeroes = [...currentHeroes];
      updateHeroes[heroeIndex]=this.newHeroe as Heroe;
      this.heroesList.set(updateHeroes);
      console.log("Héroe actualizado.")
    }else{
      //El héroe no existe, lo agregamos
      const newHeroes =[...currentHeroes, this.newHeroe as Heroe];
      this.heroesList.set(newHeroes);
      console.log("Héroe agregado");
    }

    //Limpiar el formulario despues de guardada la información
    this.newHeroe ={};
  }

  extractHeroe(heroe:Heroe){
    console.log("Heroe: ",heroe);

    //Seteamos el valor del newHeroe con el que se obtuvo del evento
    this.newHeroe = heroe;
  }

}
