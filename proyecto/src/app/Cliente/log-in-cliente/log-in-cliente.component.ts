import { Component } from '@angular/core';
import { ClienteService } from 'src/app/services/Cliente/cliente.service';
import { Cliente } from '../cliente';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in-cliente',
  templateUrl: './log-in-cliente.component.html',
  styleUrls: ['./log-in-cliente.component.css']
})
export class LogInClienteComponent {

  cedulaLog! : string;
  clienteLog!: Cliente;

  constructor(private ClienteService:ClienteService,
    private router: Router
    ) {}
    
  validarCedula() {
     

    this.ClienteService.LogIn(this.cedulaLog).subscribe(
      (data) => {

        if (data !== null) {
          // Realiza la redirección a la página deseada
          this.router.navigate(['/mascotas/all']);
        } else {
          console.log('La respuesta fue nula o indefinida');
          alert("Cedula incorrecta");
        }
      }
      
    )
    
  }

  
}
