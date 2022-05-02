import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmbajadoresComponent } from './embajadores/embajadores.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { PlanesComponent } from './planes/planes.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'Inicio', component: InicioComponent},
  {path: 'Planes', component: PlanesComponent},
  {path: 'Registro', component: RegistroComponent},
  {path: 'Login', component: LoginComponent },
  {path: 'Embajadores', component: EmbajadoresComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

