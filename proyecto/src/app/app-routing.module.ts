import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MascotaDetalleComponent } from './mascotas/mascota-detalle/mascota-detalle.component';
import { LandingComponent } from './Landing/landing/landing.component';
import { ErrorPageComponent } from './error/error-page/error-page.component';
import { TablaMascotasComponent } from './mascotas/tabla-mascotas/tabla-mascotas.component';
import { FormMascotaComponent } from './mascotas/form-mascota/form-mascota.component';
import { FormEditMascotaComponent } from './mascotas/form-edit-mascota/form-edit-mascota.component';

const routes: Routes = [
  { path: 'mascota/find/:id', component: MascotaDetalleComponent },
  { path: 'mascotas/all', component: TablaMascotasComponent },
  { path: 'mascota/add', component: FormMascotaComponent },
  { path: 'mascota/edit/:id', component: FormEditMascotaComponent },
  { path: 'cliente/add', component: ClienteFormComponent },
  { path: 'cliente/edit/:id', component: FormEditClienteComponent },
  { path: 'clientes/all', component: ClienteTablaComponent },
  { path: 'cliente/find/:id', component: ClienteDetalleComponent },
  { path: 'home', component: LandingComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

