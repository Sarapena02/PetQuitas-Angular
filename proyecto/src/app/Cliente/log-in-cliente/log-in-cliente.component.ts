import { Component } from '@angular/core';
import { ClienteService } from 'src/app/services/Cliente/cliente.service';
import { Cliente } from 'src/app/Cliente/cliente';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-log-in-cliente',
  templateUrl: './log-in-cliente.component.html',
  styleUrls: ['./log-in-cliente.component.css']
})
export class LogInClienteComponent {

  cedulaLog! : string;
  clienteLog!: Cliente;

  constructor(private ClienteService:ClienteService,
    private router: Router,
    private route: ActivatedRoute
    ) {}
    
  validarCedula() {
    this.ClienteService.LogIn(this.cedulaLog).subscribe(
      (data: Cliente) => {
        if (data !== null) {
          //Obtiene el id del cliente
          const clienteId = data.id;
          // Realiza la redirección a la página deseada
          const redirecTo = '/cliente/find/' + clienteId;
          this.router.navigate([redirecTo]);
        } else {
          console.log('La respuesta fue nula o indefinida');
          alert("Cedula incorrecta");
        }
      }
      
    )
    
  }

  
}
