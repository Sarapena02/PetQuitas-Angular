import { Tratamiento } from "src/app/Tratamiento/tratamiento"

export interface Droga{
    id:number,
    nombre:string,
    precioVentaVenta:number
    precioCompra:number
    unidadesDisponibles:number
    unidadesVendidas:number
    tratamientos?:Tratamiento[]
}