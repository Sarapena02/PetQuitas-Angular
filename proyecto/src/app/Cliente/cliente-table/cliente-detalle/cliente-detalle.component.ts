import { Component, Input } from '@angular/core';
import { Cliente } from '../cliente';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from 'src/app/clienteService/cliente.service';
import { Mascota } from 'src/app/mascotas/mascota';

@Component({
    selector: 'app-cliente-detalle',
    templateUrl: './cliente-detalle.component.html',
    styleUrls: ['./cliente-detalle.component.css']
})
export class ClienteDetalleComponent {


    @Input()
    cliente!: Cliente;
mascota: any;

    //Inyeccion de dependecias
    constructor(
        private clienteService: ClienteService,
        private route: ActivatedRoute,
        private router: Router
    ){}

    ngOnInit(): void {
        this.route.paramMap.subscribe(params => {
            const id = Number(params.get('id')); 
            this.clienteService.findById(id).subscribe(
                (data) => {
                    this.cliente = data
                }
            )
        })
    }
    
}