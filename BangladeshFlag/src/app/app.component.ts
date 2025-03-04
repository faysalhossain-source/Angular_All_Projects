import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FlagComponent } from "./flag/flag.component";
import { HurryPooterComponent } from "./hurry-pooter/hurry-pooter.component";
import { NavbarComponent } from "./navbar/navbar.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FlagComponent, HurryPooterComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BangladeshFlag';
}
