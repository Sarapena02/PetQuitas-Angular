
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Tratamiento } from "../../tratamiento";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { TratamientoService } from "src/app/services/Tratamiento/tratamiento.service";
import { ActivatedRoute, Router } from "@angular/router";
import { switchMap } from "rxjs";
import { Droga } from "src/app/Droga/droga/droga";




@Component({
    selector: 'app-form-edit-tratamiento',
    templateUrl: './form-edit-tratamiento.component.html',
    styleUrls: ['./form-edit-tratamiento.component.css']
})
export class FormEditTratamientoComponent {
    @Output()
    editMascotaEvent = new EventEmitter<Tratamiento>();

    @Input()
    tratamiento!: Tratamiento;
    drogaList!: Droga[];

    tratamientoForm!: FormGroup;

    constructor(
        private tratamientoService: TratamientoService,
        private route: ActivatedRoute,
        private router: Router,
        private formBuilder: FormBuilder
    ) {
        this.tratamientoForm = this.formBuilder.group({
            id: [null, Validators.required],
            fecha: [null, Validators.required],
            veterinario: [null, [Validators.required, Validators.pattern('^[0-9]*$')]],
            mascota: [null, [Validators.required, Validators.pattern('^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ ]*$')]],
            droga: [null, Validators.required]
        })
    }

    ngOnInit(): void {
        //busca el tratamiento a editar
        this.route.paramMap.subscribe(params => {
            const id = Number(params.get('id')); 
            this.tratamientoService.findById(id).subscribe(
                (data) => {
                    this.tratamiento = data
                    this.tratamientoForm.patchValue({
                        id: this.tratamiento.id,
                        fecha: this.tratamiento.fecha,
                        veterinario: this.tratamiento.veterinario,
                        mascota: this.tratamiento.mascota,
                        droga: this.tratamiento.droga
                    })
                }
            )
        })
    }

    editarTratamiento(form:any) {
       if(this.tratamientoForm.valid){
        this.tratamientoService.update(this.tratamientoForm.value).pipe(
            switchMap(() => {
                return this.router.navigate(['/tratamiento/all']);
            })
        ).subscribe();
       }
    }

}