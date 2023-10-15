import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Tratamiento } from "src/app/Tratamiento/tratamiento-table/tratamiento";





@Injectable({
    providedIn: 'root'
})
export class TratamientoService {
    constructor(private http: HttpClient) { }

    findAll(): Observable<Tratamiento[]> {
        return this.http.get<Tratamiento[]>("http://localhost:8090/tratamientos/all");
    }

    findById(id: number): Observable<Tratamiento> {
        return this.http.get<Tratamiento>("http://localhost:8090/tratamientos/find/" + id);
    }

    addTratamiento(tratamiento: Tratamiento) {
        return this.http.post('http://localhost:8090/tratamientos/agregar', tratamiento);
    }

    update(tratamiento: Tratamiento) {
        return this.http.put('http://localhost:8090/tratamientos/update/' + tratamiento.id, tratamiento);
    }

    deleteById(id: number) {
        return this.http.delete('http://localhost:8090/tratamientos/delete/' + id);
    }

}