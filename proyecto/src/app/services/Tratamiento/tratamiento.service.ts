import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tratamiento } from 'src/app/Tratamiento/tratamiento/tratamiento';



@Injectable({
    providedIn: 'root'
})
export class TratamientoService {
    
    constructor(
        private http: HttpClient
    ){}

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