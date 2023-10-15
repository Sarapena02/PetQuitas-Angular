import { Component } from "@angular/core";
import { Tratamiento } from "../tratamiento";
import { switchMap } from "rxjs";
import { TratamientoService } from "src/app/services/Tratamiento/tratamiento.service";
import { Router } from "@angular/router";
import { Droga } from "src/app/Droga/droga/droga";
import { Mascota } from "src/app/mascotas/mascota";
import { Veterinario } from "src/app/Veterinario/veterinario";




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
     droga!: Droga[];
     
     formTratamiento: Tratamiento = {
         id: 0,
         nombre: '',
         fecha: '',
         medicamento: 0
     }
    drogaService: any;

     constructor(
         private tratamientoService: TratamientoService,
         private router: Router
     ){}

     guardarTratamiento(form:any){
        const drogaSeleccionada = this.drogaList.find(droga => droga.id === this.formTratamiento.medicamento);

    if (drogaSeleccionada) {
      // Verificar si hay unidades disponibles
      if (drogaSeleccionada.unidadesDisponibles > 0) {
        // Realizar la lógica de restar una unidad de unidades disponibles y sumar una unidad a unidades vendidas
        drogaSeleccionada.unidadesDisponibles -= 1;
        drogaSeleccionada.unidadesVendidas += 1;
        // Actualizar la información en el backend
        this.drogaService.actualizarDroga(drogaSeleccionada).subscribe((_updatedDroga: any) => {
          // Aquí puedes continuar con el proceso de guardar el tratamiento
          // ...
        });
      } else {
        alert('No hay unidades disponibles de esta droga.');
      }
    } else {
      alert('Droga no encontrada.');
    }




         //primero asigna la mascota al objeto sendMascota, despues realiza el addMascota y redirecciona a la tabla de mascotas
         this.tratamientoList = Object.assign({}, this.formTratamiento);
         this.tratamientoService.addTratamiento(this.tratamientoList).pipe(
             switchMap(() => {
                 return this.router.navigate(['/tratamiento/all']);
             })
         ).subscribe();
     }
}