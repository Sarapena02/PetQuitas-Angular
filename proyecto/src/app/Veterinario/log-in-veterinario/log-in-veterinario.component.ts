import { Component } from '@angular/core';
import { Veterinario } from '../veterinario';
import { Router } from '@angular/router';
import { VeterinarioService } from 'src/app/services/Veterinario/veterinario.service';

@Component({
  selector: 'app-log-in-veterinario',
  templateUrl: './log-in-veterinario.component.html',
  styleUrls: ['./log-in-veterinario.component.css']
})

export class LogInVeterinarioComponent {

  cedulaLog! : string;
  contraseniaLog!: string;
  veterinarioLog!: Veterinario;
  
  constructor(private VeterinarioService:VeterinarioService,
    private router: Router
    ) {}

    validarCedulayContrasenia() {
     
      this.VeterinarioService.LogIn(this.cedulaLog, this.contraseniaLog).subscribe(
        (data) => {
  
          if (data !== null) {
            // Realiza la redirección a la página deseada
            this.router.navigate(['/mascotas/all']);
          } else {
            console.log('La respuesta fue nula o indefinida');
            alert("Cedula o contraseña incorrecta");
          }
        }
        
      )
      
    }
    
  
}
