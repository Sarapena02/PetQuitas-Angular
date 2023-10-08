import { Cliente } from "../Cliente/cliente-table/cliente";
import { Tratamiento } from "../Tratamiento/tratamiento-table/tratamiento";

export interface Mascota {
    id: number,
    nombre: string,
    raza: string,
    edad: number,
    enfermedad: string,
    estado: string,
    imagen: string,
    cliente?: Cliente,
    tratamientos?: Tratamiento[] 
}
