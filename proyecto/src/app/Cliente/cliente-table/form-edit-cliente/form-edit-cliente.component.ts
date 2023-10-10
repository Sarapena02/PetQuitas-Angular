import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cliente } from 'src/app/Cliente/cliente';
import { ActivatedRoute, Router } from '@angular/router';
import { mergeMap, switchMap } from 'rxjs';
import { ClienteService } from 'src/app/services/Cliente/cliente.service';


@Component({
    selector: 'app-form-edit-cliente',
    templateUrl: './form-edit-cliente.component.html',
    styleUrls: ['./form-edit-cliente.component.css']
})
export class FormEditClienteComponent {
    @Output()
    editClienteEvent = new EventEmitter<Cliente>();

    @Input()
    cliente!: Cliente;

    constructor(
        private clienteService: ClienteService,
        private route: ActivatedRoute,
        private router: Router
    ){}

    ngOnInit(): void {
        //busca la mascota a editar junto con el cliente asociado a esta
        this.route.paramMap.subscribe(params => {
            const id = Number(params.get('id')); 
            this.clienteService.findById(id).pipe(
                mergeMap(
                    (data) => {
                        this.cliente = data;
                        return this.clienteService.findCliente(this.cliente.id);
                    }
                )).subscribe(
                    (data) => {
                        this.cliente = data            
                    }
                )
        })
    }

    editarCliente(form:any){
        //Primero realiza el update y una vez que el update se haya realizo entonces redirecciona a la tabla de mascotas
        this.clienteService.update(this.cliente).pipe(
            switchMap(() => {
                return this.router.navigate(['/cliente/all']);
            })
        ).subscribe();
    }
}
