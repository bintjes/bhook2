import { Injectable } from '@angular/core';
import { BookModel } from './models/book.model' ;
@Injectable()
export class BhookpouchService {

  constructor() { }


  getLatest(): Array<BookModel>{
    return [
      { 
       _id : '12454',
       _rev : '456',
      author_lastname: 'Proust',
      author_firstname:'Marcel',
      added : '2016-06-01 09:38:35',
      title: 'La prisonnière',
      toread: true,
      img: null
      },
      { 
       _id : '888',
       _rev : '999',
      author_lastname: 'Gary',
      author_firstname:'Romain',
      added : '2016-06-05 09:38:35',
      title: 'La promesse de l\'aube',
      toread: false,
      img: null
      } 
      
      ] ;
  }


  }
