import { Tratamiento } from "src/app/Tratamiento/tratamiento-table/tratamiento"

export interface Droga{
    nombre:string
    precioVenta:number
    precioCompra:number
    unidadesDisponibles:number
    unidadesVendidas:number
    tratamientos?:Tratamiento[]
}