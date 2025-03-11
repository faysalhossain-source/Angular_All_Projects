import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BookAddComponent } from './book-add/book-add.component';
import { BookListComponent } from './book-list/book-list.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },  
  { path: 'book-add', component: BookAddComponent },  
  { path: 'book-list', component: BookListComponent },  
  { path: '**', redirectTo: '', pathMatch: 'full' }  
];
