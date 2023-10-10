import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PetQuitas';

  userType: string = '';

  ngOnInit() {
    // Intenta obtener el userType desde localStorage al cargar el componente
    const storedUserType = localStorage.getItem('userType');
    if (storedUserType) {
      this.userType = JSON.parse(storedUserType);
    }
  }

  changeUserTypeLanding(elementRef: any) {
    elementRef.addLandingEvent.subscribe(
      (data: string) => {
        this.userType = data;
        localStorage.setItem('userType', JSON.stringify(data));
      }
    )
  }

  changeUserTypeCliente(elementRef: any) {
    elementRef.addClienteloginEvent.subscribe(
      (data: string) => {
      this.userType = data; 
      localStorage.setItem('userType', JSON.stringify(data));
      }
    )
  }

  changeUserTypeVeterinario(elementRef: any) {
    elementRef.addVeterianriologinEvent.subscribe(
      (data: string) => {
        this.userType = data;
        localStorage.setItem('userType', JSON.stringify(data));

      }
    )
  }

  changeUserTypeAdmin(elementRef: any) {
    elementRef.addAdminloginEvent.subscribe(
      (data: string) => {
        this.userType = data;
        localStorage.setItem('userType', JSON.stringify(data));

      }
    )
  }

}
