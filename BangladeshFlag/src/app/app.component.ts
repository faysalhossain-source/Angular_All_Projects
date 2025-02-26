import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FlagComponent } from "./flag/flag.component";
import { HurryPooterComponent } from "./hurry-pooter/hurry-pooter.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FlagComponent, HurryPooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BangladeshFlag';
}
