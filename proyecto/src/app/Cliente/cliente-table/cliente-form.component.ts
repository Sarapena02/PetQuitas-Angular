import { Component, EventEmitter, Output } from '@angular/core';
import { Cliente } from './cliente';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { ClienteService } from 'src/app/clienteService/cliente.service';

@Component({
  selector: 'app-cliente-table',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent {

  @Output()
  addClienteEvent = new EventEmitter<Cliente>();

  @Output()
  ocultarFormularioEvent = new EventEmitter<boolean>();

  sendCliente!: Cliente;

  formCliente: Cliente = {
    id: 0,
    nombre: '',
    celular: '',
    correo: '',
    cedula: '',
    imagen: ''
  }

  constructor(
    private clienteService: ClienteService,
    private router: Router
  ){}

  guardarCliente(form:any){
    //primero asigna la mascota al objeto sendMascota, despues realiza el addMascota y redirecciona a la tabla de mascotas
    this.sendCliente = Object.assign({}, this.formCliente);
    this.clienteService.addCliente(this.sendCliente).pipe(
      switchMap(() => {
        return this.router.navigate(['/clientes/all']);
      })
    ).subscribe();
  }
}
