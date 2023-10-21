import { Component } from '@angular/core';
import { Tratamiento } from '../../tratamiento';
import { TratamientoService } from 'src/app/services/Tratamiento/tratamiento.service';

@Component({
  selector: 'app-tratamiento-all',
  templateUrl: './tratamiento-all.component.html',
  styleUrls: ['./tratamiento-all.component.css']
})
export class TratamientoAllComponent {

  tratamientosList!: Tratamiento[];

  constructor(
    private tratamientoService: TratamientoService
  ){
  }

  
  ngOnInit(): void {
    this.tratamientoService.findAll().subscribe(
      data =>
        this.tratamientosList = data
    )
  }

  eliminarTratamiento(tratamiento: Tratamiento){
    var index = this.tratamientosList.indexOf(tratamiento);
    this.tratamientosList.splice(index, 1);
    this.tratamientoService.deleteById(tratamiento.id);
  }
}