import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteTableComponent } from './Cliente/cliente-table/cliente-table.component';
import { TratamientoTableComponent } from './Tratamiento/tratamiento-table/tratamiento-table.component';
import { VeterinarioTableComponent } from './Veterinario/veterinario-table/veterinario-table.component';
import { MedicamentoComponent } from './Droga/droga/medicamento.component';
import { TablaMascotasComponent } from './mascotas/tabla-mascotas/tabla-mascotas.component';
import { MascotaDetalleComponent } from './mascotas/mascota-detalle/mascota-detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    ClienteTableComponent,
    TratamientoTableComponent,
    VeterinarioTableComponent,
    MedicamentoComponent,
    TablaMascotasComponent,
    MascotaDetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
