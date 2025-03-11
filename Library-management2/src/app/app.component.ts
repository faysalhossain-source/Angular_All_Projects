import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { BookComponent } from './book-add/book.component';
import { NavberComponent } from "./navber/navber.component";
import { HomeComponent } from './home/home.component';
import { BookAddComponent } from './book-add/book-add.component';
import { BookListComponent } from './book-list/book-list.component';

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [RouterOutlet, NavberComponent, BookAddComponent, BookListComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  title = 'Library-management';
}