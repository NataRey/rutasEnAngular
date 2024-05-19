import { Component } from '@angular/core';
//importo mis dependecias para el formulario
import { FormsModule, ReactiveFormsModule, FormGroup,FormControl} from '@angular/forms';


@Component({
  selector: 'app-iniciar-sesion',
  standalone: true,
  //activo mis importaciones
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './iniciar-sesion.component.html',
  styleUrl: './iniciar-sesion.component.css'
})
export class IniciarSesionComponent {
  Formulariocredenciales = new FormGroup({
    usuario: new FormControl(''),
    contrasenia: new FormControl('')
  });
  manejarEnvio(){
    console.log("credenciales", this.Formulariocredenciales.value);
  }
}
