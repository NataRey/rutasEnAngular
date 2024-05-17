import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
//importar dentro del componente principal
import { NavegacionComponent} from './components/navegacion/navegacion.component';
@Component({
  selector: 'app-root',
  standalone: true,
  //agrego los componente que haya importado
  imports: [CommonModule,RouterOutlet, NavegacionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-app2';
}
