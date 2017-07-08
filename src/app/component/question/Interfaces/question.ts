import { Opcion } from "./opcion";
import { Respuesta } from "./respuesta";

export interface Question {
  id? : number;
  resultado? : boolean;
  nombrePregunta? : string;
  opciones? : Opcion[];
  respuesta? : Respuesta;
}
