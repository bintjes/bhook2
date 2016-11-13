import { Injectable } from '@angular/core';
import { GooglebookModel } from './models/googlebook.model';
@Injectable()
export class GooglebookapiService {

  private api_key : 'klkl';
  private google_url :'http://';  
  constructor() { }

    list(): Array<GooglebookModel> {
    return [
      {name: 'Lyon'},
      {name: 'Paris'}
      ] ;
  }

}
