import { Component } from '@angular/core';
import { Tratamiento } from '../tratamiento';

@Component({
  selector: 'app-tratamiento-table',
  templateUrl: './tratamiento-table.component.html',
  styleUrls: ['./tratamiento-table.component.css']
})
export class TratamientoTableComponent {

  tratamientoList!: Tratamiento[];
  

}
