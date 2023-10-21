import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { FormEditClienteComponent } from './Cliente/form-edit-cliente/form-edit-cliente.component';
import { ClienteDetalleComponent } from './Cliente/cliente-detalle/cliente-detalle.component';
import { ClienteTablaComponent } from './Cliente/tabla-cliente/tabla-cliente.component';
import { ClienteFormComponent } from './Cliente/form-cliente/cliente-form.component';
import { LogInVeterinarioComponent } from './Veterinario/log-in-veterinario/log-in-veterinario.component';
import { LogInClienteComponent } from './Cliente/log-in-cliente/log-in-cliente.component';
import { LogInAdminComponent } from './Admin/log-in-admin/log-in-admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardAdminComponent } from './Admin/dashboard-admin/dashboard-admin.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormEditVeterinarioComponent } from './Veterinario/form-edit-veterinario/form-edit-veterinario.component';
import { FormVeterinarioComponent } from './Veterinario/form-veterinario/form-veterinario.component';
import { VeterinarioDetalleComponent } from './Veterinario/veterinario-detalle/veterinario-detalle.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HighchartsChartModule } from 'highcharts-angular';
import { TramientosUltimoMesComponent } from './Admin/InfoDashboard/tramientos-ultimo-mes/tramientos-ultimo-mes.component';
import { CantidadTratamientosTipoComponent } from './Admin/InfoDashboard/cantidad-tratamientos-tipo/cantidad-tratamientos-tipo.component';
import { VeterinariosActivosComponent } from './Admin/InfoDashboard/veterinarios-activos/veterinarios-activos.component';
import { MascotasActivasComponent } from './Admin/InfoDashboard/mascotas-activas/mascotas-activas.component';
import { VentasTotalesComponent } from './Admin/InfoDashboard/ventas-totales/ventas-totales.component';
import { GananciasTotalesComponent } from './Admin/InfoDashboard/ganancias-totales/ganancias-totales.component';
import { Top3TratamientosComponent } from './Admin/InfoDashboard/top3-tratamientos/top3-tratamientos.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatTableModule} from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { FormTratamientoComponent } from './Tratamiento/tratamiento/form-tratamiento/form-tratamiento.component';
import { TratamientoAllComponent } from './Tratamiento/tratamiento/tratamiento-all/tratamiento-all.component';
import { FormEditTratamientoComponent}   from './Tratamiento/tratamiento/form-edit-tratamiento/form-edit-tratamiento.component';
import { TratamientoDetalleComponent } from './Tratamiento/tratamiento/tratamiento-detalle/tratamiento-detalle.component';




@NgModule({
  declarations: [
    AppComponent,
    ClienteFormComponent,
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
    ClienteTablaComponent,
    LogInVeterinarioComponent,
    LogInClienteComponent,
    LogInAdminComponent,
    DashboardAdminComponent,
    FormEditVeterinarioComponent,
    FormVeterinarioComponent,
    VeterinarioDetalleComponent,
    FormTratamientoComponent,
    TramientosUltimoMesComponent,
    CantidadTratamientosTipoComponent,
    VeterinariosActivosComponent,
    MascotasActivasComponent,
    VentasTotalesComponent,
    GananciasTotalesComponent,
    Top3TratamientosComponent,
    FormEditTratamientoComponent,
    TratamientoAllComponent,
    TratamientoDetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    HighchartsChartModule,
    FlexLayoutModule,
    MatTableModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
