import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DrogaService } from 'src/app/services/Droga/droga.service';
import { TratamientoService } from 'src/app/services/Tratamiento/tratamiento.service';
import { MascotaService } from 'src/app/services/mascota/mascota.service';
import { VeterinarioService } from 'src/app/services/Veterinario/veterinario.service';
import { Droga } from 'src/app/Droga/droga/droga';
import { Mascota } from 'src/app/mascotas/mascota';
import { Veterinario } from 'src/app/Veterinario/veterinario';
import { Tratamiento } from '../../tratamiento';

@Component({
  selector: 'app-form-tratamiento',
  templateUrl: './form-tratamiento.component.html',
  styleUrls: ['./form-tratamiento.component.css']
})
export class FormTratamientoComponent {

  formTratamiento: FormGroup

  sendTratamiento!: Tratamiento

  drogaList!: Droga[]
  mascotaList!: Mascota[]
  veterinarioList!: Veterinario[]

  selectedDroga!: Droga
  selectedMascota!: Mascota
  selectedVeterinario!: Veterinario

  minDate: string
  
  constructor(
    private drogaService: DrogaService,
    private mascotaService: MascotaService,
    private VeterinarioService: VeterinarioService,
    private tratamientoService: TratamientoService,
    router: Router,
    private formBuilder: FormBuilder
  ) { 
    this.formTratamiento = this.formBuilder.group({
      fecha: '',
      droga: null,
      mascota: null,
      veterinario: null
    })

    this.minDate = new Date().toISOString().split('T')[0];

  }

  ngOnInit(): void {
    //buscar todas las drogas
    this.drogaService.findAll().subscribe(
      (data) => {
        this.drogaList = data
      }
    )
    //buscar todas las mascotas
    this.mascotaService.findAll().subscribe(
      (data) => {
        this.mascotaList = data
      }
    )
    //buscar todos los veterinarios
    this.VeterinarioService.findAll().subscribe(
      (data) => {
        this.veterinarioList = data
      }
    )
  }

  guardarTratamiento(){
    if(this.formTratamiento.valid){
      if(this.selectedDroga.unidadesDisponibles>0){
        this.sendTratamiento = this.formTratamiento.value as Tratamiento;
        this.actualizarDroga();
        console.log(this.sendTratamiento.fecha.toString());
        this.tratamientoService.addTratamiento(this.sendTratamiento).subscribe();
      }
    }
  }

  actualizarDroga(){
    this.selectedDroga.unidadesDisponibles--;
    this.selectedDroga.unidadesVendidas++;
    this.drogaService.update(this.selectedDroga).subscribe();
  }

}
