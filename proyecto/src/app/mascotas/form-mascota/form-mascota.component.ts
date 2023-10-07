import { Component, EventEmitter, Input, Output, } from '@angular/core';
import { Mascota } from '../mascota';
import { Router } from '@angular/router';
import { MascotaService } from 'src/app/services/mascota/mascota.service';

@Component({
  selector: 'app-form-mascota',
  templateUrl: './form-mascota.component.html',
  styleUrls: ['./form-mascota.component.css']
})
export class FormMascotaComponent {

  @Output()
  addMascotaEvent = new EventEmitter<Mascota>();

  @Output()
  ocultarFormularioEvent = new EventEmitter<boolean>();

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

    this.sendMascota = Object.assign({}, this.formMascota);
    console.log(this.sendMascota);
    this.mascotaService.addMascota(this.sendMascota);
    this.router.navigate(['/mascotas/all']);
}
}
