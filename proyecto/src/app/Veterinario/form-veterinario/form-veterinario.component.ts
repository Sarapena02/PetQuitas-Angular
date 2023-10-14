import { Component } from '@angular/core';
import { Veterinario } from '../veterinario';
import { VeterinarioService } from 'src/app/services/Veterinario/veterinario.service';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-form-veterinario',
  templateUrl: './form-veterinario.component.html',
  styleUrls: ['./form-veterinario.component.css']
})
export class FormVeterinarioComponent {

  sendVeterinario!: Veterinario;

  formVeterinario: Veterinario = {
    id: 0,
    nombre: '',
    cedula: '',
    contrasenia: '',
    especialidad: '',
    estado: 'activo',
    foto: ''
  }

  constructor(
    private veterinarioService: VeterinarioService,
    private router: Router
  ){}

  guardarVeterinario(form:any){
    //primero asigna la mascota al objeto sendMascota, despues realiza el addMascota y redirecciona a la tabla de mascotas
    this.sendVeterinario = Object.assign({}, this.formVeterinario);
    this.veterinarioService.addMascota(this.sendVeterinario).pipe(
      switchMap(() => {
        return this.router.navigate(['/veterinarios/all']);
      })
    ).subscribe();
}
}
