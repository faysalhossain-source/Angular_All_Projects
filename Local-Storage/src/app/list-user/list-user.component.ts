import { Component, OnInit } from '@angular/core';
import { User } from '../app.component';
import { config } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-user',
  imports: [],
  templateUrl: './list-user.component.html',
  styleUrl: './list-user.component.css'
})
export class ListUserComponent implements OnInit{
  faysal: User[] = [];

  constructor(private router:Router){}

  ngOnInit(): void {
    this.faysal = JSON.parse(localStorage.getItem('users')|| '[]');
  }
  editUser(user:User){
    this.router.navigate(['/create-user'],{state:{user}});
  }
  deleteUser(user:User){
    if(confirm('are you sure want to delete this user?')){
      this.faysal= this.faysal.filter(u => u !== user);
      localStorage.setItem('users',JSON.stringify(this.faysal))
    }
  }

}
