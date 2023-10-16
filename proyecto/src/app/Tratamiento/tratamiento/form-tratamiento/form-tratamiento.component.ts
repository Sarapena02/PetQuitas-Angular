import { Component } from "@angular/core";
import { switchMap } from "rxjs";
import { TratamientoService } from "src/app/services/Tratamiento/tratamiento.service";
import { Router } from "@angular/router";
import { Droga } from "src/app/Droga/droga/droga";
import { Mascota } from "src/app/mascotas/mascota";
import { Veterinario } from "src/app/Veterinario/veterinario";
import { Tratamiento } from "../../tratamiento";
import { DrogaService } from "src/app/services/Droga/droga.service";




@Component({
    selector: 'app-form-tratamiento',
    templateUrl: './form-tratamiento.component.html',
    styleUrls: ['./form-tratamiento.component.css']
})
export class FormTratamientoComponent {
     tratamientoList!: Tratamiento;
     mascotaList!: Mascota;
     veterinarioList!: Veterinario;
     drogaList!: Droga[];
     droga!: Droga;
     
     formTratamiento: Tratamiento = {
         id: 0,
         fecha: ''

     }

     constructor(
         private tratamientoService: TratamientoService,
         private drogaService: DrogaService,
         private router: Router
     ){}

     guardarTratamiento(form:any){
        const drogaSeleccionada = this.drogaList.find(droga => droga.id === this.formTratamiento.idDroga);

    if (drogaSeleccionada) {
      // Verificar si hay unidades disponibles
      if (drogaSeleccionada.unidadesDisponibles > 0) {
        // Realizar la lógica de restar una unidad de unidades disponibles y sumar una unidad a unidades vendidas
        drogaSeleccionada.unidadesDisponibles -= 1;
        drogaSeleccionada.unidadesVendidas += 1;
        // Actualizar la información en el backend
        this.drogaService.actualizarDroga(drogaSeleccionada).subscribe((_updatedDroga: any) => {
            this.tratamientoService.addTratamiento(this.formTratamiento).subscribe((nuevoTratamiento: any) => {
                // El tratamiento se ha guardado correctamente
                console.log("Tratamiento guardado con éxito:", nuevoTratamiento);
        
                // Redireccionar a la página de tratamientos (o a donde necesites)
                this.router.navigate(['/tratamiento/all']);
            }, error => {
                console.error("Error al guardar el tratamiento:", error);
            });
        });
      } else {
        alert('No hay unidades disponibles de esta droga.');
      }
    } else {
      alert('Droga no encontrada.');
    }
     }
}