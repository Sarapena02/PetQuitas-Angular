import { Component, EventEmitter, Input, Output, } from '@angular/core';
import { Mascota } from '../mascota';
import { Router } from '@angular/router';
import { MascotaService } from 'src/app/services/mascota/mascota.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-form-mascota',
  templateUrl: './form-mascota.component.html',
  styleUrls: ['./form-mascota.component.css']
})
export class FormMascotaComponent {

  sendMascota!: Mascota;

  formMascota: Mascota = {
    id: 0,
    nombre: '',
    raza: '',
    edad: 0,
    enfermedad: '',
    estado: 'Activo',
    imagen: ''
  }

  constructor(
    private mascotaService: MascotaService,
    private router: Router
  ){}

  guardarMascota(form:any){
    //primero asigna la mascota al objeto sendMascota, despues realiza el addMascota y redirecciona a la tabla de mascotas
    this.sendMascota = Object.assign({}, this.formMascota);
    this.mascotaService.addMascota(this.sendMascota).pipe(
      switchMap(() => {
        return this.router.navigate(['/mascotas/all']);
      })
    ).subscribe();
}
}
