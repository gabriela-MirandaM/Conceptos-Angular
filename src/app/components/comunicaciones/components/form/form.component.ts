import { Component, effect, input, output } from '@angular/core';
import { CreateUsuario, Usuario } from '../../usuario';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-comunicaciones-form',
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  //input
  usuario= input<CreateUsuario>();

  //output
  usuarioUpdate = output<Usuario>();

  newUsuario: CreateUsuario={};

  constructor(){
    effect(()=>{
      const usuarioActual = this.usuario();
      this.newUsuario = {...usuarioActual};
    })
  }

  agregarUsuario(){
    console.log("Nuevo usuario", this.newUsuario);
    this.usuarioUpdate.emit(this.newUsuario as Usuario)
    this.newUsuario ={};
  }
}
