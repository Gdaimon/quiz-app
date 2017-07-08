import { Component } from "@angular/core";

declare const $ : any;

@Component ( {
  selector   : "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls  : [ "./footer.component.css" ]
} )
export class FooterComponent {
  
  constructor () {
  }
  
  
  public toggleSidebar () : void {
    $ ( ".ui.labeled.icon.sidebar" )
      .sidebar ( "toggle" );
  }
}
