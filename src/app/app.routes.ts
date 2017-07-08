/**
 * Created by darkklitos on 12/04/17.
 */
import { RouterModule, Routes } from "@angular/router";
import { QuestionComponent } from "./component/question/question.component";
import { ResultadoComponent } from "./component/resultado/resultado.component";
import { ReviewComponent } from "./component/review/review.component";

const ROUTES : Routes = [
  
  {
    path     : "",
    component: QuestionComponent
  },
  {
    path     : "review",
    component: ReviewComponent
  },
  {
    path     : "results",
    component: ResultadoComponent
  },
  // {
  //   path      : "**",
  //   component : QuestionComponent,
  //   pathMatch : "full",
  //   redirectTo: ""
  // },
  {
    path     : "question/:id",
    component: QuestionComponent
  }
];

export const APP_ROUTING = RouterModule.forRoot ( ROUTES, { useHash: true } );
