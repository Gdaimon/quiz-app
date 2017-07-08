import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { firebaseConfig } from "../environments/firebase.config";

import { AppComponent } from "./app.component";
import { APP_ROUTING } from "./app.routes";
import { FooterComponent } from "./component/footer/footer.component";
import { HeaderComponent } from "./component/header/header.component";
import { QuestionComponent } from "./component/question/question.component";
import { ResultadoComponent } from "./component/resultado/resultado.component";
import { ReviewComponent } from "./component/review/review.component";
import { ResultadoPipe } from "./pipes/resultado.pipe";
import { PreguntaService } from "./services/pregunta.service";

@NgModule ( {
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    QuestionComponent,
    ReviewComponent,
    ResultadoComponent,
    ResultadoPipe
  ],
  imports     : [
    BrowserModule,
    APP_ROUTING,
    AngularFireModule.initializeApp ( firebaseConfig ),
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers   : [ PreguntaService ],
  bootstrap   : [ AppComponent ]
} )
export class AppModule {
}
