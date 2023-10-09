import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Mascota } from '../mascota';
import { MascotaService } from 'src/app/services/mascota/mascota.service';
import { ActivatedRoute, Router } from '@angular/router';
import { mergeMap, switchMap } from 'rxjs';

@Component({
  selector: 'app-form-edit-mascota',
  templateUrl: './form-edit-mascota.component.html',
  styleUrls: ['./form-edit-mascota.component.css']
})
export class FormEditMascotaComponent {

  @Output()
  editMascotaEvent = new EventEmitter<Mascota>();

  @Input()
  mascota!: Mascota;

  constructor(
    private mascotaService: MascotaService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void {
    //busca la mascota a editar junto con el cliente asociado a esta
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id')); 
      this.mascotaService.findById(id).pipe(
        mergeMap(
          (data) => {
            this.mascota = data;
            return this.mascotaService.findCliente(this.mascota.id);
          }
        )).subscribe(
          (data) => {
            this.mascota.cliente = data            
          }
        )
    })
  }

  editarMascota(form:any){
    //Primero realiza el update y una vez que el update se haya realizo entonces redirecciona a la tabla de mascotas
    this.mascotaService.update(this.mascota).pipe(
      switchMap(() => {
        return this.router.navigate(['/mascotas/all']);
      })
    ).subscribe();
}

}
