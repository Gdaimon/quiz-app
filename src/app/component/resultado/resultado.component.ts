import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { PreguntaService } from "app/services/pregunta.service";
import { Question } from "../question/Interfaces/question";

@Component ( {
  selector   : "app-resultado",
  templateUrl: "./resultado.component.html",
  styleUrls  : [ "./resultado.component.css" ]
} )
export class ResultadoComponent implements OnInit {
  title : string = "Quiz Result";
  public preguntas : Question[] = [];
  key : string;
  
  constructor ( private _preguntaService : PreguntaService,
                private router : Router ) {
    this._preguntaService.getPreguntas ()
      .subscribe ( preguntas => {
        if ( this.preguntas.length === 0 ) {
          for ( let i = 0; i < preguntas[ 0 ].length; ++i ) {
            this.preguntas.push ( preguntas[ 0 ][ i ] );
          }
        }
      } );
  }
  
  ngOnInit () {
  }
  
  /**
   * Nos asigna el background del div segun si ha respondido
   * @param {string} result
   * @returns {any}
   */
  getStyle ( result : boolean ) {
    if ( result ) {
      return "#b3fbc4";
    } else {
      return "#f5bdbd";
    }
  }
  
  /**
   * Metodo que inicializa el quiz
   */
  resetQuiz () {
    this._preguntaService.getPreguntas ()
      .subscribe ( preguntas => {
        this.key = preguntas[ 0 ].$key;
        if ( this.preguntas.length === 0 ) {
          for ( let i = 0; i < preguntas[ 0 ].length; ++i ) {
            this.preguntas.push ( preguntas[ 0 ][ i ] );
          }
        }
        
        for ( let pregunta of this.preguntas ) {
          pregunta.resultado = false;
          for ( let i = 0; i < pregunta.opciones.length; ++i ) {
            if ( pregunta.opciones[ i ].value ) {
              pregunta.opciones[ i ].value = false;
              break;
            }
          }
        }
        this._preguntaService.actualizarPregunta ( this.preguntas, this.key );
      } );
    this.router.navigate ( [ `question/0` ] );
  }
  
}
