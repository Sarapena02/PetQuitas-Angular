import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Veterinario } from '../veterinario';
import { VeterinarioService } from 'src/app/services/Veterinario/veterinario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { mergeMap, switchMap } from 'rxjs';

@Component({
  selector: 'app-form-edit-veterinario',
  templateUrl: './form-edit-veterinario.component.html',
  styleUrls: ['./form-edit-veterinario.component.css']
})
export class FormEditVeterinarioComponent {
  @Output()
  editMascotaEvent = new EventEmitter<Veterinario>();

  @Input()
  veterinario!: Veterinario;

  constructor(
    private veterinarioService: VeterinarioService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void {
    //busca el veterinario a editar
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id')); 
      this.veterinarioService.findById(id).subscribe(
        (data) => {
          this.veterinario = data
        }
      )
    })
  }

  editarVeterinario(form:any){
    //Primero realiza el update y una vez que el update se haya realizo entonces redirecciona a la tabla de mascotas
    this.veterinarioService.update(this.veterinario).pipe(
      switchMap(() => {
        return this.router.navigate(['/veterinarios/all']);
      })
    ).subscribe();
  }


}
