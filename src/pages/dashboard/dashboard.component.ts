import { Component, OnInit } from '@angular/core';
import { BhookpouchService } from '../../app/bhookpouch.service'
import { BookModel } from '../../app/models/book.model';

@Component({
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  books: Array<BookModel> ;
  constructor(private bhookpouchService: BhookpouchService) { }

  ngOnInit() {
    this.books = this.bhookpouchService.getLatest();

  }

}
