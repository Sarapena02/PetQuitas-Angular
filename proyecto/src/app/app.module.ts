import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteFormComponent } from './Cliente/cliente-table/cliente-form.component';
import { TratamientoTableComponent } from './Tratamiento/tratamiento-table/tratamiento-table.component';
import { VeterinarioTableComponent } from './Veterinario/veterinario-table/veterinario-table.component';
import { DrogaComponent } from './Droga/droga/droga.component';
import { TablaMascotasComponent } from './mascotas/tabla-mascotas/tabla-mascotas.component';
import { MascotaDetalleComponent } from './mascotas/mascota-detalle/mascota-detalle.component';
import { LandingComponent } from './Landing/landing/landing.component';
import { ErrorPageComponent } from './error/error-page/error-page.component';
import { FormMascotaComponent } from './mascotas/form-mascota/form-mascota.component';
import { FormsModule, NgForm } from '@angular/forms';
import { FormEditMascotaComponent } from './mascotas/form-edit-mascota/form-edit-mascota.component';
import { HttpClientModule } from '@angular/common/http';
import { FormEditClienteComponent } from './Cliente/cliente-table/form-edit-cliente/form-edit-cliente.component';
import { ClienteDetalleComponent } from './Cliente/cliente-table/cliente-detalle/cliente-detalle.component';
import { ActivatedRoute, Router } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ClienteFormComponent,
    TratamientoTableComponent,
    VeterinarioTableComponent,
    DrogaComponent,
    TablaMascotasComponent,
    MascotaDetalleComponent,
    LandingComponent,
    ErrorPageComponent,
    FormMascotaComponent,
    FormEditMascotaComponent,
    FormEditClienteComponent,
    ClienteDetalleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
