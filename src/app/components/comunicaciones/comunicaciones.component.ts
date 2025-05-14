import { Component, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './components/list/list.component';
import { FormComponent } from './components/form/form.component';
import { CreateUsuario, Usuario } from './usuario';
import usuarios from './usuarios.json'

@Component({
  selector: 'app-comunicaciones',
  imports: [FormsModule, FormComponent, ListComponent],
  templateUrl: './comunicaciones.component.html',
  styleUrl: './comunicaciones.component.css'
})
export class ComunicacionesComponent {
  usuariosList: WritableSignal<Usuario[]>;
  newUsuario: WritableSignal<CreateUsuario>;

  constructor(){
    this.usuariosList = signal<Usuario[]>(usuarios);
    this.newUsuario = signal<CreateUsuario>({});
  }

  agregarUsuario(usuario: Usuario){
    console.log("Nuevo usuario recibido de form.component.ts",usuario);

    if(!usuario.id){
      console.warn("No se puede agregar o actualizar un usuarion sin su respectivo ID");
      return;
    }

    const currentUsuarios=this.usuariosList();
    const usuarioIndex = currentUsuarios.findIndex(u=> u.id === usuario.id);

    if(usuarioIndex !== -1){
      //Si el usuario existe, actualizamos sus datos
      const updateUsuarios =[...currentUsuarios];
      updateUsuarios[usuarioIndex] = {...usuario};
      this.usuariosList.set(updateUsuarios);
      console.log("Usuario agregado.")
    }
    this.newUsuario.set({});
  }

  hanleSelectedUser(usuario:Usuario){
    console.log(`Usuario recibido de parte de list.component.ts: ${JSON.stringify(usuario)}`)
    this.newUsuario.set(usuario as CreateUsuario);
  }

}
