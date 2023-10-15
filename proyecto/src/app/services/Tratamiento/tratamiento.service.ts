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

  findTratamientosXdrogaUltimoMes(): Observable<any[]>{
    return this.http.get<any[]>('http://localhost:8090/tratamientos/TratamientosPorMedicamentoEnelUltimoMes');
  }

    findAll(): Observable<Tratamiento[]>{
        return this.http.get<Tratamiento[]>("http://localhost:8090/tratamientos/all");
    }

    findById(id:number):Observable<Tratamiento>{
        const tratamiento = this.http.get<Tratamiento>(`http://localhost:8090/tratamientos/find/` + id);
        return tratamiento;
    }

    deleteById(id:number){
        return this.http.delete(`http://localhost:8090/tratamientos/delete/` + id).subscribe();
    }

    addTratamiento(tratamiento:Tratamiento){
        return this.http.post('http://localhost:8090/tratamientos/agregar',tratamiento);
    }

    update(tratamiento:Tratamiento){
        return this.http.put('http://localhost:8090/tratamientos/update/' + tratamiento.id, tratamiento );
    }
}