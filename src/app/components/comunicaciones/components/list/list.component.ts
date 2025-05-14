import { Component, input, output } from '@angular/core';
import { Usuario } from '../../usuario';


@Component({
  selector: 'app-comunicaciones-list',
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  //input
  users= input.required<Usuario[]>();

  //Output
  userSelect = output<Usuario>();

  editarUsuario(usuario: Usuario){
    console.log(`Editar usuario ${JSON.stringify(usuario)}`);
    this.userSelect.emit(usuario);
  }
}
