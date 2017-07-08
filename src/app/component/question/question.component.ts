import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import "rxjs/Rx";
import { PreguntaService } from "../../services/pregunta.service";
import { Question } from "./Interfaces/question";

@Component ( {
  selector   : "app-question",
  templateUrl: "./question.component.html",
  styleUrls  : [ "./question.component.css" ]
} )
export class QuestionComponent {
  
  first : string = "first";
  prev : string = "prev";
  next : string = "next";
  last : string = "last";
  indice : number = 0;
  atras : boolean = false;
  adelante : boolean = false;
  public pregunta : any;
  id : number;
  
  public preguntas : Question[] = [];
  
  loading = false;
  key : string;
  opciones : any[];
  
  
  constructor ( private route : ActivatedRoute,
                private router : Router,
                private _preguntaService : PreguntaService ) {
    
    // this._preguntaService.nuevasPreguntas ();
    
    this._preguntaService.getPreguntas ()
      .subscribe ( preguntas => {
        this.key = preguntas[ 0 ].$key;
        if ( this.preguntas.length === 0 ) {
          for ( let i = 0; i < preguntas[ 0 ].length; ++i ) {
            this.preguntas.push ( preguntas[ 0 ][ i ] );
          }
        }
        
        
        this.loading = true;
        this.pregunta = this.preguntas[ 0 ];
        this.atras = (this.indice === 0) ? true : false;
        this.adelante = (this.indice >= this.preguntas.length - 1) ? true : false;
        this.route.params.subscribe (
          params => {
            if ( params[ "id" ] ) {
              this.id = parseInt ( params[ "id" ] );
              if ( this.id > this.preguntas.length ) {
                this.pregunta = this.preguntas[ this.id ];
                this.router.navigate ( [ "" ] );
              } else {
                this.atras = (this.id === 0) ? true : false;
                this.adelante = (this.id >= this.preguntas.length - 1) ? true : false;
                this.router.navigate ( [ `question/${this.id}` ] );
              }
            } else {
              this.id = 0;
              this.atras = (this.id === 0) ? true : false;
              this.adelante = (this.id >= this.preguntas.length) ? true : false;
              this.pregunta = this.preguntas[ this.id ];
              this.router.navigate ( [ `question/${this.id}` ] );
            }
          }
        );
      } )
    ;
    
  }
  
  
  public seleccion ( indice : number ) : void {
    for ( let i = 0; i < this.pregunta.opciones.length; ++i ) {
      if ( i === indice ) {
        this.pregunta.opciones[ i ].value = true;
      } else {
        this.pregunta.opciones[ i ].value = false;
      }
    }
    
    for ( let opcion of this.pregunta.opciones ) {
      if ( opcion.value ) {
        if ( opcion.nombre == this.pregunta.respuesta.nombre ) {
          this.preguntas[ this.id ].resultado = true;
          this._preguntaService.actualizarPregunta ( this.preguntas, this.key );
          return;
        }
        this.preguntas[ this.id ].resultado = false;
      }
    }
  }
  
  public indiceRuta ( instr : string ) : void {
    if ( instr === this.first ) {
      this.id = 0;
      this.asignarPregunta ( this.id );
    } else if ( instr === this.last ) {
      this.id = this.preguntas.length;
      this.asignarPregunta ( this.id, this.last );
    } else if ( instr === this.prev ) {
      if ( this.id == 14 ) {
        this.id = this.id - 1;
      }
      this.id = this.id - 1;
      this.asignarPregunta ( this.id, this.prev );
    } else if ( instr === this.next ) {
      this.id = this.id + 1;
      this.asignarPregunta ( this.id, this.next );
    }
  }
  
  
  public asignarPregunta ( index : number, mov? : string ) : void {
    if ( index == 0 ) {
      this.moverAlInicio ();
      this.router.navigate ( [ "" ] );
    } else if ( mov === this.last ) {
      this.moverAlFinal ();
    } else if ( mov === this.prev ) {
      this.moverAtras ();
    } else if ( mov === this.next ) {
      this.moverAdelante ();
    }
  }
  
  /**
   * Metodo que me lleva al inicio de las preguntas
   */
  public moverAlInicio () : void {
    this.id = 0;
    this.atras = (this.id === 0) ? true : false;
    this.pregunta = this.preguntas[ this.id ];
  }
  
  /**
   * Metodo que me lleva al fina de las preguntas
   */
  public moverAlFinal () : void {
    this.pregunta = this.preguntas[ this.id - 1 ];
    this.atras = (this.id === 0) ? true : false;
    this.adelante = (this.id >= this.preguntas.length) ? true : false;
    this.router.navigate ( [ `question/${this.id}` ] );
  }
  
  /**
   * Metodo que me lleva al una pregunta atras
   */
  public moverAtras () : void {
    // console.log ( this.id );
    // if ( this.id == 14 ) {
    //   this.id = this.id - 2;
    // }
    this.pregunta = this.preguntas[ this.id ];
    this.router.navigate ( [ `question/${this.id}` ] );
  }
  
  /**
   * Metodo que me lleva al una pregunta adelante
   */
  public moverAdelante () : void {
    this.pregunta = this.preguntas[ this.id ];
    this.router.navigate ( [ `question/${this.id}` ] );
  }
  
}
