import { Component, NgModule } from '@angular/core';
import { BookService } from '../service/book.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-booklist',
  templateUrl: './book-list.component.html',
  standalone: true,
  imports:[FormsModule,CommonModule]
})
export class BookListComponent {
  books: any[] = [];
borrowerName: any;

  constructor(private bookService: BookService) {
    this.loadBooks();
  }

  loadBooks() {
    this.books = this.bookService.getBooks();
  }
  

  deleteBook(id: number) {
    this.bookService.deleteBook(id);
    this.loadBooks();
  }

  borrowBook(book: any, borrowerName: string) {
    this.bookService.borrowBook(book.id, borrowerName);
    this.loadBooks();
  }

  returnBook(id: number) {
    this.bookService.returnBook(id);
    this.loadBooks();
  }
}
