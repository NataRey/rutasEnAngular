import { Routes } from '@angular/router';
//importo lo que necesito
import { InicioComponent } from './components/inicio/inicio.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { PrivadoComponent } from './components/privado/privado.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
//importo un omponente que cree llamado noEncontrado para que cada vez que el usuario digite mal salga el aviso del componente 
import { NoEncontradoComponent } from './components/no-encontrado/no-encontrado.component';
export const routes: Routes = [
    //creo un objeto con cada ruta 
    {path: "inicio", component: InicioComponent},
    //a continuacion digo como quiero que se redirija por defecto a algun elemento en este caso a inicio
    {path: "", redirectTo: "inicio", pathMatch: "full"},
    {path: "iniciarSesion", component: IniciarSesionComponent},
    {path: "contacto", component: ContactoComponent},
    {path: "nosotros", component: NosotrosComponent},
    {path: "productos", component: ProductosComponent},
    {path: "servicios", component: ServiciosComponent},
    {path: "privado", component: PrivadoComponent},
    //lo llamo aqui para que cuando el usuario ponga algun dato mal lo envie a ese componente
    {path: "**", component: NoEncontradoComponent},

];
