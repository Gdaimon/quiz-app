import { Pipe, PipeTransform } from "@angular/core";

@Pipe ( {
  name: "resultado"
} )
export class ResultadoPipe implements PipeTransform {
  
  transform ( values : any ) : any {
    let response = false;
    for ( let opcion of values ) {
      if ( opcion.value ) {
        response = opcion.value;
        break;
      }
    }
    
    if ( response ) {
      return "Answered";
    }
    return "Not Answered";
  }
  
}
