export interface PokemonResponse{
  count:number;
  results:Pokemon[];
}
export interface Pokemon{
  name: string;
  url:string;
}
