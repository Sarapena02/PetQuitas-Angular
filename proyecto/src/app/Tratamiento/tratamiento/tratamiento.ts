import { Droga} from "../../Droga/droga/droga";
import { Veterinario } from "src/app/Veterinario/veterinario";
import { Mascota } from "src/app/mascotas/mascota";

export interface Tratamiento {
    medicamento: number;
    id: number,
    nombre: string,
    fecha: string,
    droga?: Droga
    veterinario?: Veterinario
    mascota?: Mascota
}
