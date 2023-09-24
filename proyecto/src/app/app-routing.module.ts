import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MascotaDetalleComponent } from './mascotas/mascota-detalle/mascota-detalle.component';

const routes: Routes = [
  { path: 'mascota/find/:id', component: MascotaDetalleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

