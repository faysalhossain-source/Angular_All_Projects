import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../app.component';


@Component({
  selector: 'app-list-product',
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ListProductComponent implements OnInit{
  product: Product []= [];

  constructor(private router: Router){
  }

  ngOnInit() {
    let products = JSON.parse(localStorage.getItem('product') || '[]');
    this.product = products;
  }
  editUser(product: Product){
    this.router.navigate(['/add-product'], {state: {product}});
  }

  deleteUser(products: Product){
    if (confirm('Are you want to delete this product?')) {
      this.product= this.product.filter((product) => product !== products);
      localStorage.setItem('product',JSON.stringify(this.product));
    }
  }
}