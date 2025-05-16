import { Component, signal } from '@angular/core';
import { TitleCasePipe } from '@angular/common';

import { PokemonService } from './pokemon.service';
import { Pokemon } from './pokemon.model';
import { PokemonDetail } from './pokemon-detail.model';

@Component({
  selector: 'app-servicios',
  imports: [TitleCasePipe],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})
export class ServiciosComponent {
  constructor(private pokemonService: PokemonService){
    this.fetchPokemons();
  }

  //Listado de Pokemons
  pokemons = signal<Pokemon[]>([]);
  isLoading=signal(true);

  page= signal(0);//Cada página contiene 20 elementos
  limit=10;

  nextPage(){
    this.page.update((p)=>p+1);
    this.fetchPokemons();
  }

  prevPage(){
    if(this.page()>0){
      this.page.update((p)=>p-1);
      this.fetchPokemons();
    }
  }

  fetchPokemons(){
    this.isLoading.set(true);
    const offset = this.page()* this.limit;

    this.pokemonService.getPokemons(offset, this.limit).subscribe((data)=>{
      this.pokemons.set(data.results);
      this.isLoading.set(false);
    });
  }

  //Detalles del pokemon
  selectedPokemon=signal<PokemonDetail| null>(null);
  isDetailLoanding=signal(false);

  selectPokemon(name:string){
    this.isDetailLoanding.set(true);
    this.pokemonService.getPokemonDetail(name).subscribe((detail)=>{
      this.selectedPokemon.set(detail);
      this.isDetailLoanding.set(false);
    });
  }

  //Creando un Helper para recuperar la imagen del pokemon
  getPokemonImage():string{
    const sprite = this.selectedPokemon()?.sprites.front_default;
    return sprite ?? "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png"
  }

}
