import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BookService } from '../service/book.service';

@Component({
  selector: 'app-bookadd',
  templateUrl: './book-add.component.html',
  standalone: true,
  imports: [FormsModule, CommonModule], 
})
export class BookAddComponent {
  books: any[] = [];
  newBook = { title: '', author: '' }; 

  constructor(private bookService: BookService) {
    this.loadBooks();
  }

  loadBooks() {
    this.books = this.bookService.getBooks(); 
  }

  addBook() {
    if (this.newBook.title.trim() && this.newBook.author.trim()) {
      this.bookService.addBook({
        ...this.newBook,
        id: Date.now(), 
        available: true,  
        borrowedBy: ''   
      });
      this.newBook = { title: '', author: '' }; 
      this.loadBooks(); 
    } else {
      console.error('Both fields are required.'); 
    }
  }
}
