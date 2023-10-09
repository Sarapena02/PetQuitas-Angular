import { Component } from '@angular/core';

@Component({
  selector: 'app-log-in-cliente',
  templateUrl: './log-in-cliente.component.html',
  styleUrls: ['./log-in-cliente.component.css']
})
export class LogInClienteComponent {
  cedula: string;
  constructor() {
    this.cedula = '';
  }

  validarCedula() {
    // Obtiene el valor de la cédula ingresada por el usuario
    const cedulaIngresada = document.getElementById("cedula") as HTMLInputElement;

    if (cedulaIngresada) {
      const cedula = cedulaIngresada.value;
  
      // Simulamos una respuesta del servidor (cedulaExiste es un booleano)
      const cedulaExiste = false; // Cambia esto según la lógica real
  
      if (cedulaExiste) {
        alert('La cédula ya existe.');
      } else {
        this.cedula = cedula;
  
        // Puedes agregar aquí cualquier otra lógica que necesites antes de enviar el formulario.
      }
    } else {
      alert("Elemento 'cedula' no encontrado");
    }
  }
}
