import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Question } from "./component/question/Interfaces/question";
import { PreguntaService } from "./services/pregunta.service";


@Component ( {
  selector   : "app-root",
  templateUrl: "./app.component.html",
  styleUrls  : [ "./app.component.css" ]
} )
export class AppComponent {
  cargar = true;
  public preguntas : Question[] = [];
  key : string;
  
  constructor ( private _preguntaService : PreguntaService,
                private router : Router ) {
    this.cargar = _preguntaService.loading;
  }
  
  /**
   * Metodo que inicializa el quiz
   */
  reiniciarQuiz () {
    this._preguntaService.getPreguntas ()
      .subscribe ( preguntas => {
        this.key = preguntas[ 0 ].$key;
        if ( this.preguntas.length === 0 ) {
          for ( let i = 0; i < preguntas[ 0 ].length; ++i ) {
            this.preguntas.push ( preguntas[ 0 ][ i ] );
          }
        }
        console.log ( this.preguntas );
        
        for ( let pregunta of this.preguntas ) {
          pregunta.resultado = false;
          for ( let i = 0; i < pregunta.opciones.length; ++i ) {
            if ( pregunta.opciones[ i ].value ) {
              pregunta.opciones[ i ].value = false;
              break;
            }
          }
        }
        console.log ( this.preguntas );
        this._preguntaService.actualizarPregunta ( this.preguntas, this.key );
      } );
  }
  
  /**
   * Metodo que nos brinda un preview del quiz
   */
  avancesQuiz () {
    this.router.navigate ( [ `review` ] );
  }
  
  /**
   * Nos permite enviar el quiz
   */
  enviar () {
    this.router.navigate ( [ `results` ] );
  }
}
