import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {  LibraryComponent } from './book/book.component'; 

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [RouterOutlet,  LibraryComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  title = 'Library-management';
}
