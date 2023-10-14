import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TratamientoService {

  constructor(
    private http: HttpClient
  ) { }


  findAllTratamientosUltimoMes(): Observable<number>{
    return this.http.get<number>('http://localhost:8090/tratamientos/ultimoMes');
  }

  findTratamientosXdrogaUltimoMes(): Observable<any[]>{
    return this.http.get<any[]>('http://localhost:8090/tratamientos/TratamientosPorMedicamentoEnelUltimoMes');
  }
}
