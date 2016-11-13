import { Component, Input } from '@angular/core';

/*
  Generated class for the Header component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'bh-header',
  templateUrl: 'header.html'
})
export class Header {
  @Input('titlepage') titlepage: string;
  
  constructor() {
    console.log('Hello Header Component');
  }
  public setTitlePage( titlepage : string){

    this.titlepage = titlepage ;
    console.log("should set " + titlepage);
  }

}
 