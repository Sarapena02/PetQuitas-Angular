import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Mascota } from '../mascota';
import { MascotaService } from 'src/app/services/mascota/mascota.service';
import { ActivatedRoute, Router } from '@angular/router';

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
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id')); 
      this.mascota = this.mascotaService.findById(id);
    })
  }

  editarMascota(form:any){
    this.mascotaService.update(this.mascota);
    this.router.navigate(['/mascota/mascotas']);
}

}
