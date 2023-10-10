import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VeterinarioService {

  constructor(private http: HttpClient) { }
  
  LogIn(cedulaLog: string, contrasenaLog: string) {
    console.log(cedulaLog);
    console.log(contrasenaLog);
  
    const body = {
      cedula: cedulaLog,
      contrasenia: contrasenaLog
    };
  
    return this.http.post('http://localhost:8090/veterinarios/login', body);
  }
  
 
}
