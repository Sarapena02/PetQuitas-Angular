import { Component } from '@angular/core';
import { Mascota } from '../mascota';
import { MascotaService } from 'src/app/services/mascota/mascota.service';

@Component({
  selector: 'app-tabla-mascotas',
  templateUrl: './tabla-mascotas.component.html',
  styleUrls: ['./tabla-mascotas.component.css']
})
export class TablaMascotasComponent {

  //atributos
  selectedMascota!: Mascota;

  mascotasList!: Mascota[];

  //constructor
  constructor(
    private mascotaService: MascotaService
  ){
  }

  ngOnInit(): void {
    this.mascotasList = this.mascotaService.findAll();
  }

  //metodos
  mostrarMascota(mascota: Mascota){
    this.selectedMascota = mascota;
  }

  eliminarMascota(mascota: Mascota){
    var index = this.mascotasList.indexOf(mascota);
    this.mascotasList.splice(index, 1);
  }

}
