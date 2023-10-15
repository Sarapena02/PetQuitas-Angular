import { Droga } from "src/app/Droga/droga/droga"
import { Veterinario } from "src/app/Veterinario/veterinario"
import { Mascota } from "src/app/mascotas/mascota"

export interface Tratamiento{
    id:number
    fecha:string
    veterinario?:Veterinario
    mascota?:Mascota
    droga?:Droga
}