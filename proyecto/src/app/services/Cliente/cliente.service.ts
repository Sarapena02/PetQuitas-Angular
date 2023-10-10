import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Cliente } from 'src/app/Cliente/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) 
  { }

  LogIn(cedulaLog: string): Observable<Cliente> {
    return this.http.post('http://localhost:8090/clientes/login', cedulaLog).pipe(
      map((response: any) => {
        // Create a new instance of Cliente and assign the properties from the response
        const cliente: Cliente = {
          id: response.id,
          nombre: response.nombre,
          celular: response.celular,
          imagen: undefined,
          correo: '',
          cedula: ''
        };
        return cliente;
      })
    );
  }

  findAll(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>("http://localhost:8090/clientes/all");
}

findById(id:number):Observable<Cliente>{
    const cliente = this.http.get<Cliente>(`http://localhost:8090/clientes/find/` + id);
    return cliente;
}

deleteById(id:number){
    return this.http.delete(`http://localhost:8090/clientes/delete/` + id).subscribe();
}

addCliente(cliente:Cliente){
    return this.http.post('http://localhost:8090/clientes/agregar',cliente);
}

update(cliente:Cliente){
    return this.http.put('http://localhost:8090/clientes/update/' + cliente.id, cliente );
}

findCliente(id:number):Observable<Cliente>{
    return this.http.get<Cliente>(`http://localhost:8090/clientes/cliente/` + id);
}
  

}
