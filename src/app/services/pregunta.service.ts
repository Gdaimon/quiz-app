import { Injectable } from "@angular/core";
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database";
import { Question } from "../component/question/Interfaces/question";

@Injectable ()
export class PreguntaService {
  loading = true;
  
  public preguntas : Question[] = [
    {
      id            : 1,
      resultado     : false,
      nombrePregunta: "Se considera que el primer lenguaje de alto nivel fue",
      opciones      : [
        {
          nombre: "Ada",
          value : false
        },
        
        {
          nombre: "C",
          value : false
        },
        
        {
          nombre: "Fortran",
          value : false
        },
        
        {
          nombre: "Java",
          value : false
        }
      ],
      respuesta     : {
        nombre: "Fortran"
      }
    },
    {
      id            : 2,
      resultado     : false,
      nombrePregunta: "El lenguaje ensamblador se sitúa",
      opciones      : [
        {
          nombre: "Más cerca del lenguaje máquina que de los lenguajes de alto nivel",
          value : false
        },
        
        {
          nombre: "Más cerca de los lenguajes de alto nivel que del lenguaje máquina",
          value : false
        },
        
        {
          nombre: "No es un lenguaje de programación",
          value : false
        },
        
        {
          nombre: "Las anteriores respuestas no son correctas",
          value : false
        }
      ],
      respuesta     : {
        nombre: "Más cerca del lenguaje máquina que de los lenguajes de alto nivel"
      }
    },
    {
      id            : 3,
      resultado     : false,
      nombrePregunta: "Imperativo, declarativo y orientado a objetos son",
      opciones      : [
        {
          nombre: "Modos de compilar el código fuente de un programa de ordenador",
          value : false
        },
        
        {
          nombre: "Modos de definir el pseudocódigo de un programa de ordenador",
          value : false
        },
        
        {
          nombre: "Paradigmas de programación",
          value : false
        },
        
        {
          nombre: "Las anteriores respuestas no son correctas",
          value : false
        }
      ],
      respuesta     : {
        nombre: "Paradigmas de programación"
      }
    },
    {
      id            : 4,
      resultado     : false,
      nombrePregunta: "if, else, for y while son",
      opciones      : [
        {
          nombre: "Funciones de acceso a datos",
          value : false
        },
        
        {
          nombre: "Sentencias de control",
          value : false
        },
        
        {
          nombre: "Tipos de datos",
          value : false
        },
        
        {
          nombre: "Las anteriores respuestas no son correctas",
          value : false
        }
      ],
      respuesta     : {
        nombre: "Sentencias de control"
      }
    },
    {
      id            : 5,
      resultado     : false,
      nombrePregunta: "int, char, float, string y boolean son",
      opciones      : [
        {
          nombre: "Funciones de acceso a datos",
          value : false
        },
        
        {
          nombre: "Instrucciones de acceso a datos",
          value : false
        },
        
        {
          nombre: "Sentencias de control",
          value : false
        },
        
        {
          nombre: "Tipos de datos",
          value : false
        }
      ],
      respuesta     : {
        nombre: "Tipos de datos"
      }
    },
    {
      id            : 6,
      resultado     : false,
      nombrePregunta: "Una cola es",
      opciones      : [
        {
          nombre: "Una estructura de datos en la que las inserciones se realizan por un extremo y las extracciones por el otro extremo",
          value : false
        },
        
        {
          nombre: "Una estructura de datos en la que las inserciones y extracciones se realizan por el mismo extremo",
          value : false
        },
        
        {
          nombre: "Una estructura de datos en la que sólo se pueden realizar inserciones, pero nunca extracciones",
          value : false
        },
        
        {
          nombre: "Las anteriores respuestas no son correctas",
          value : false
        }
      ],
      respuesta     : {
        nombre: "Una estructura de datos en la que las inserciones se realizan por un extremo y las extracciones por el otro extremo"
      }
    },
    {
      id            : 7,
      resultado     : false,
      nombrePregunta: "En un lenguaje débilmente tipado",
      opciones      : [
        {
          nombre: "Un valor de un tipo puede ser tratado como de otro tipo",
          value : false
        },
        
        {
          nombre: "Un valor de un tipo nunca puede ser tratado como de otro tipo",
          value : false
        }
        ,
        
        {
          nombre: "Un valor de un tipo puede ser tratado como de otro tipo siempre que se realice una conversión de forma explícita",
          value : false
        },
        
        {
          nombre: "Las anteriores respuestas no son correctas",
          value : false
        }
      
      ],
      respuesta     : {
        nombre: "Un valor de un tipo puede ser tratado como de otro tipo"
      }
    },
    {
      id            : 8,
      resultado     : false,
      nombrePregunta: "El número 1010 en binario se representa en decimal como",
      opciones      :
        [
          {
            nombre: "8",
            value : false
          },
          {
            nombre: "12",
            value : false
          },
          
          {
            nombre: "16",
            value : false
          },
          {
            nombre: "Las anteriores respuestas no son correctas",
            value : false
          }
        ],
      respuesta     : {
        nombre: "Las anteriores respuestas no son correctas"
      }
    },
    {
      id            : 9,
      resultado     : false,
      nombrePregunta: "Un bucle o ciclo es",
      opciones      :
        [
          {
            nombre: "Una sentencia que permite decidir si se ejecuta o no se ejecuta una sola vez un bloque aislado de código",
            value : false
          }
          , {
          nombre: "Una sentencia que ejecuta otra sentencia que a su vez ejecuta la primera sentencia",
          value : false
        },
          {
            nombre: "Una sentencia que permite ejecutar un bloque aislado de código varias veces hasta que se cumpla (o deje de cumplirse) la condición anombre: signada al bucle",
            value : false
          },
          {
            nombre: "Las anteriores respuestas no son correctas",
            value : false
          }
        ],
      respuesta     :
        {
          nombre: "Una sentencia que permite ejecutar un bloque aislado de código varias veces hasta que se cumpla (o deje de cumplirse) la condición asignada al bucle"
        }
    },
    {
      id            : 10,
      resultado     : false,
      nombrePregunta: "¿Qué es un algoritmo?",
      opciones      :
        [
          {
            nombre: "Un conjunto de instrucciones o reglas bien definidas, ordenadas y finitas que permiten realizar una actividad, mediante pasos sucesivos que no generen dudas a quien deba realizar dicha actividad",
            value : false
          },
          {
            nombre: "Es una igualdad entre dos expresiones algebraicas, denominadas miembros, en las que aparecen valores conocidos o datos, y d nombre: esconocidos o incógnitas, relacionados mediante operaciones",
            value : false
          },
          {
            nombre: "Es una relación de variables que pueden ser cuantificadas para calcular el valor de otras de muy difícil o imposible cálculo y que snombre: uministra una solución para un problema",
            value : false
          },
          {
            nombre: "Las anteriores respuestas no son correctas",
            value : false
          }
        
        ],
      respuesta     : {
        nombre: "Un conjunto de instrucciones o reglas bien definidas, ordenadas y finitas que permiten realizar una actividad mediante pasos sucesivos que no generen dudas a quien deba realizar dicha actividad"
      }
    },
    {
      id            : 11,
      resultado     : false,
      nombrePregunta: "La programación se puede definir como...",
      opciones      :
        [
          {
            nombre: "el proceso de diseñar, codificar, depurar y mantener el código fuente de programas de ordenador",
            value : false
          }
          , {
          nombre: "la ejecución de programas de ordenador desde la línea de comandos",
          value : false
        },
          {
            nombre: "la instalación de programas en sistemas operativos desde la línea de comandos",
            value : false
          },
          {
            nombre: "Las anteriores respuestas no son correctas",
            value : false
          }
        
        ],
      respuesta     :
        {
          nombre: "el proceso de diseñar, codificar, depurar y mantener el código fuente de programas de ordenador"
        }
    },
    {
      id            : 12,
      resultado     : false,
      nombrePregunta: "¿Cuál es el código ASCII decimal de 'nueva línea' (line feed)?",
      opciones      :
        [
          {
            nombre: "10",
            value : false
          }
          , {
          nombre: "13",
          value : false
        },
          {
            nombre: "32",
            value : false
          },
          {
            nombre: "Las anteriores respuestas no son correctas",
            value : false
          }
        ],
      respuesta     : {
        nombre: "10"
      }
    },
    {
      id            : 13,
      resultado     : false,
      nombrePregunta: "¿Cuál es el código ASCII decimal de la letra A mayúscula?",
      opciones      : [
        {
          nombre: "32",
          value : false
        }
        , {
          nombre: "65",
          value : false
        },
        {
          nombre: "97",
          value : false
        },
        {
          nombre: "126",
          value : false
        }
      ],
      respuesta     :
        {
          nombre: "65"
        }
    },
    {
      id            : 14,
      resultado     : false,
      nombrePregunta: "¿Qué significa EOF?",
      opciones      :
        [
          {
            nombre: "Empty or full",
            value : false
          },
          {
            nombre: "End of file",
            value : false
          },
          {
            nombre: "End of floop",
            value : false
          },
          {
            nombre: "Las anteriores respuestas no son correctas",
            value : false
          }
        
        ],
      respuesta     : {
        nombre: "End of file"
      }
    }
  ];
  
  key : string;
  
  constructor ( private db : AngularFireDatabase ) {
  }
  
  nuevasPreguntas () {
    this.db.list ( `pregunta` ).push ( this.preguntas );
  }
  
  actualizarPregunta ( pregunta : any, key : string ) {
    this.db.list ( `pregunta` ).update ( key, pregunta );
  }
  
  getPreguntas () : FirebaseListObservable<any> {
    return this.db.list ( "pregunta" );
  }
  
}
