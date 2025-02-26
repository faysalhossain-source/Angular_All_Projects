import { Component, OnInit } from '@angular/core';
import { PotterseviceService } from '../service/pottersevice.service'; 

@Component({
  selector: 'app-hurry-pooter',
  templateUrl: './hurry-pooter.component.html',
  styleUrls: ['./hurry-pooter.component.css'] 
})
export class HurryPooterComponent implements OnInit {
  spells: any[] = [];

  constructor(private potterService: PotterseviceService) {} 

  ngOnInit(): void {
    console.log('Harry potter');
    this.fetchSpells(); 
  }


  fetchSpells(): void {
    this.potterService.getSpells().subscribe(
      (data) => {
        this.spells = data;
        console.log('Fetched spells:', this.spells);
      },
      (error) => {
        console.error('Error fetching spells:', error); 
      }
    );
  }
}
