import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from "./nav/nav.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
   ,
})
export class AppComponent {
  title = 'product-management';
}
export class Product {
  name: string;
  price: number;
  quantity: number;
  purchaseDate: Date;
  sellDate: Date;
  buyer: string;
  seller: string;
  sNumber: number;

  constructor(
    name: string,
    price: number,
    quantity: number,
    purchaseDate: Date,
    sellDate: Date,
    buyer: string,
    seller: string,
    sNumber: number
  ) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.purchaseDate = purchaseDate;
    this.sellDate = sellDate;
    this.buyer = buyer;
    this.seller = seller;
    this.sNumber = sNumber;
  }
}
