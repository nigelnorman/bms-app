import { Component, OnInit } from '@angular/core';
import { Input } from "@angular/core";
import { BookViewModel } from '../api/src/models';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  @Input() bookslist: BookViewModel[];

  public newBook: BookViewModel;

  constructor() {
    this.newBook = {} as BookViewModel;
   }

  ngOnInit() {
  }

  public addBook = () => {
    if (this.bookslist.find(b => b.title === this.newBook.title) === undefined){
      this.bookslist.push(this.newBook);
      this.newBook = {} as BookViewModel;
    }
  }

  public removeBook = (title: string) => {
    let index = this.bookslist.findIndex(b => b.title === title)
    if ( index !== -1){
      this.bookslist.splice(index, 1);
    }
  }
}
