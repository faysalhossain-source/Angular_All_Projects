import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  //   imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  protected readonly title = signal('CountApp');
  //count:number=0;
  count=0;
//this is one kind of method
  // pukiIncrement(){
  //   this.count = this.count+1
  // }
  // pukiDecrement(){
  //   this.count = this.count-1
  // }
  // pukiReset(){
  //   this.count = 0
  // }

  faysal(val:String){
   if(val=='plus'){
    this.count = this.count+1
  } else if (val=='minus') {
    this.count = this.count -1
  } else {
    this.count=0
  }

  }
}
