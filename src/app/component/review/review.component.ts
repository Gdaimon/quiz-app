import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { PreguntaService } from "../../services/pregunta.service";
import { Question } from "../question/Interfaces/question";

@Component ( {
  selector   : "app-review",
  templateUrl: "./review.component.html",
  styleUrls  : [ "./review.component.css" ]
} )
export class ReviewComponent implements OnInit {
  titulo : string = "Review del Quiz";
  public preguntas : Question[] = [];
  loading = false;
  
  constructor ( private _preguntaService : PreguntaService,
                private router : Router ) {
    
    this._preguntaService.getPreguntas ()
      .subscribe ( preguntas => {
        for ( let i = 0; i < preguntas[ 0 ].length; ++i ) {
          this.preguntas.push ( preguntas[ 0 ][ i ] );
        }
        this.loading = true;
      } );
  }
  
  ngOnInit () {
  }
  
  /**
   * Nos asigna el background del div segun si ha respondido
   * @param {string} result
   * @returns {any}
   */
  getStyle ( result : string ) {
    if ( result === "Answered" ) {
      return "#b3fbc4";
    } else {
      return "#f5bdbd";
    }
  }
  
  /**
   * Metodo que nos regresa al quiz
   */
  regresar () {
    this.router.navigate ( [ `question/0` ] );
  }
}
