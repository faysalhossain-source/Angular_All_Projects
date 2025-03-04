import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private storageKey = 'books';

  constructor() {}

  getBooks(): Book[] {
    return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
  }

  saveBooks(books: Book[]) {
    localStorage.setItem(this.storageKey, JSON.stringify(books));
  }

  addBook(book: Book) {
    let books = this.getBooks();
    books.push(book);
    this.saveBooks(books);
  }

  updateBook(updatedBook: Book) {
    let books = this.getBooks().map(book => book.id === updatedBook.id ? updatedBook : book);
    this.saveBooks(books);
  }

  deleteBook(id: number) {
    let books = this.getBooks().filter(book => book.id !== id);
    this.saveBooks(books);
  }
}
