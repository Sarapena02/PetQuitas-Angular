import { Component, Input } from '@angular/core';
import { Cliente } from 'src/app/Cliente/cliente';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from 'src/app/services/Cliente/cliente.service';
import { MascotaService } from 'src/app/services/mascota/mascota.service';
import { Mascota } from 'src/app/mascotas/mascota';

@Component({
    selector: 'app-cliente-detalle',
    templateUrl: './cliente-detalle.component.html',
    styleUrls: ['./cliente-detalle.component.css']
})
export class ClienteDetalleComponent {


    @Input()
    cliente!: Cliente;
    mascota!: Mascota;

    //Inyeccion de dependecias
    constructor(
        private clienteService: ClienteService,
        private mascotaService: MascotaService,
        private route: ActivatedRoute,
        private router: Router
    ){}

    ngOnInit(): void {
        this.route.paramMap.subscribe(params => {
            const id = Number(params.get('id')); 
            this.clienteService.findById(id).subscribe(
                (data) => {
                    this.cliente = data
                    this.mascotaService.findById(id).subscribe(
                        (data) => {
                            this.mascota = data
                        }
                    )
                }
            )
        })
    }
    
}