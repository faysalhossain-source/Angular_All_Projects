import { Component, createComponent, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../app.component';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-create-user',
  imports: [FormsModule],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent  {

u: User = new User ('',0,'','')
isUpdate = false;

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    if (nav?.extras.state && nav.extras.state['user']) {
      this.u = nav.extras.state['user'];
      this.isUpdate = true;
    }
  }

  

  onSubmit() {
    let users = JSON.parse(localStorage.getItem('users') || '[]');
    
    if(this.isUpdate){
      users= users.map((zahid: { phone: string; }) => (zahid.phone == this.u.phone? this.u :zahid));
    }else{
      users.push(this.u)
    }
    
    //users.push(this.u);

    localStorage.setItem('users', JSON.stringify(users));

    this.u = new User('',0,'','');
   // alert('User added successfully');
   this.router.navigate(['/list-user'])
  }

}
