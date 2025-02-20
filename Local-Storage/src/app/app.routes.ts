import { Routes } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'create-user', component: CreateUserComponent },
  { path: 'list-user', component: ListUserComponent },
  { path: '**', redirectTo: ''}
  
];
