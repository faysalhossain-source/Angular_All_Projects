import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  books: any[] = [];

  constructor() {
    this.loadBooks(); 
  }

  // Local Storage in booklis
  loadBooks() {
    const storedBooks = localStorage.getItem('books');
    this.books = storedBooks ? JSON.parse(storedBooks) : [];
  }

 
  saveBooks() {
    localStorage.setItem('books', JSON.stringify(this.books));
  }

  addBook(book: { id: number; title: string; author: string; available: boolean; borrowedBy: string; }) {
    this.books.push(book);
    this.saveBooks(); 
  }

  deleteBook(id: number) {
    this.books = this.books.filter(book => book.id !== id);
    this.saveBooks();
  }

  borrowBook(id: number, borrowerName: string) {
    const book = this.books.find(b => b.id === id);
    if (book && book.available) {
      book.available = false;
      book.borrowedBy = borrowerName;
      this.saveBooks();
    }
  }

  returnBook(id: number) {
    const book = this.books.find(b => b.id === id);
    if (book && !book.available) {
      book.available = true;
      book.borrowedBy = '';
      book.borrowerName = '';
      this.saveBooks();
    }
  }

  getBooks() {
    return this.books;
  }
}
