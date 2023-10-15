import { Mascota } from "../mascotas/mascota"

export interface Cliente{
    id:number
    nombre:string
    celular:string
    correo:string
    cedula:string
    imagen: string
    mascotas?: Mascota[]
}