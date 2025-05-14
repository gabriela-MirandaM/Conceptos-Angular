import { CreateHeroe } from '../heroes/hereos';
export interface Usuario{
  id:number;
  username:string;
  email:string;
  isActive:boolean;
}

export interface CreateUsuario{
  id?:number;
  username?: string;
  email?: string;
  isActive?: boolean;
}
