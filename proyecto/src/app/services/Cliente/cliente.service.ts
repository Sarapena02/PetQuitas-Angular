import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) 
  { }

  LogIn(cedulaLog:string ){
     return this.http.post('http://localhost:8090/clientes/login',cedulaLog);
  }

}
