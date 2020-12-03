// Importar modulos del router de angular
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importar componentes
import { HomeComponent } from './home/home.component';
import { ZapatosComponent } from './zapatos/zapatos.component';
import { VideoJuegoComponent } from './videojuego/videojuego.component';
import { CursosComponent } from './cursos/cursos.component';
import { ExternoComponent } from './externo/externo.component';
import { ContactoComponent } from './contacto/contacto.component';

// Array de rutas
const appRoutes: Routes = [
  {path: '' , component: HomeComponent},
  {path: 'home', component:HomeComponent},
  {path: 'zapatos', component: ZapatosComponent},
  {path: 'videojuegos', component: VideoJuegoComponent},
  {path: 'cursos', component: CursosComponent},
  {path: 'cursos/:nombre/:followers', component: CursosComponent}, // parametro nombre opcional
  {path: 'externo', component: ExternoComponent},
  {path: 'contacto', component: ContactoComponent},
  // el path ** sera el error 404, se ejecutara cuando no se busque ninguna de las url anteriores, en este caso se envia al home
  {path: '**', component: HomeComponent}
];

// Exportar el modulo del route
export const appRoutingProviders: any[] = []; //exportar el servicio
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes); //exportar el modulo

