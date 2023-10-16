import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tratamiento } from 'src/app/Tratamiento/tratamiento';

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

  findTratamientosXdrogaUltimoMes(): Observable<Tratamiento[]>{
    return this.http.get<any[]>('http://localhost:8090/tratamientos/TratamientosPorMedicamentoEnelUltimoMes');
  }

  addTratamiento(tratamiento: Tratamiento){
    return this.http.post('http://localhost:8090/tratamientos/agregar', tratamiento);
  }

  findAll(): Observable<Tratamiento[]>{
    return this.http.get<Tratamiento[]>('http://localhost:8090/tratamientos/all');
  }
}
