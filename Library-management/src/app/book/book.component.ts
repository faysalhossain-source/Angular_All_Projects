// src/app/library/library.component.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { Book } from '../models/book.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-library',
  standalone: true, 
  imports: [FormsModule, CommonModule], 
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent {
  books: Book[] = []; 
  newBook: Book = { id: 0, title: '', author: '', available: true, borrowedBy: '' }; 
  borrowerName: string = ''; 

  
  addBook(): void {
    this.newBook.id = this.books.length + 1; 
    this.books.push({ ...this.newBook }); 
    this.newBook = { id: 0, title: '', author: '', available: true, borrowedBy: '' }; 
  }

  
  borrowBook(book: Book): void {
    if (this.borrowerName) {
      book.available = false; 
      book.borrowedBy = this.borrowerName; 
      this.borrowerName = ''; 
    }
  }

  
  returnBook(book: Book): void {
    book.available = true; 
    book.borrowedBy = ''; 
  }

 
  deleteBook(id: number): void {
    this.books = this.books.filter((book) => book.id !== id);
  }
}