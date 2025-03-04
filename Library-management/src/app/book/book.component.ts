// src/app/library/library.component.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // FormsModule ইম্পোর্ট করুন
import { Book } from '../models/book.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-library',
  standalone: true, // স্ট্যান্ডালোন কম্পোনেন্ট হিসাবে চিহ্নিত করুন
  imports: [FormsModule, CommonModule], // FormsModule এবং CommonModule যোগ করুন
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class LibraryComponent {
  books: Book[] = []; // বইয়ের লিস্ট
  newBook: Book = { id: 0, title: '', author: '', available: true, borrowedBy: '' }; // নতুন বইয়ের ডেটা
  borrowerName: string = ''; // ধারকারীর নাম

  // বই যোগ করার মেথড
  addBook(): void {
    this.newBook.id = this.books.length + 1; // নতুন বইয়ের আইডি জেনারেট করুন
    this.books.push({ ...this.newBook }); // বই লিস্টে যোগ করুন
    this.newBook = { id: 0, title: '', author: '', available: true, borrowedBy: '' }; // ফর্ম রিসেট করুন
  }

  // বই ধার করার মেথড
  borrowBook(book: Book): void {
    if (this.borrowerName) {
      book.available = false; // বইটি ধার করা হয়েছে
      book.borrowedBy = this.borrowerName; // ধারকারীর নাম সেট করুন
      this.borrowerName = ''; // ইনপুট ফিল্ড রিসেট করুন
    }
  }

  // বই ফেরত দেওয়ার মেথড
  returnBook(book: Book): void {
    book.available = true; // বইটি ফেরত দেওয়া হয়েছে
    book.borrowedBy = ''; // ধারকারীর নাম রিমুভ করুন
  }

  // বই ডিলিট করার মেথড
  deleteBook(id: number): void {
    this.books = this.books.filter((book) => book.id !== id); // বই লিস্ট থেকে রিমুভ করুন
  }
}