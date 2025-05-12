export interface Heroe{
  id: number;
  nombre: string;
  planetaOrigen: string;
  poder: number;
}

export interface CreateHeroe{
  id?:number;
  nombre?:string;
  planetaOrigen?:string;
  poder?:number;
}
