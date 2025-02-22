import { Component, OnInit } from '@angular/core';
import { Product } from '../../app.component.ts';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  imports: [FormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {

  p: Product = new Product
    ('', 0, 0, new Date(''), new Date(''), '', '', 0);
    isUpdate = false;

    constructor(private router: Router) {
      const nav = this.router.getCurrentNavigation();
      if(nav?.extras?.state?.['product']){
        this.p = nav.extras.state['product'];
        this.isUpdate = true;
      }
    }

    ngOnInit(): void{
      // initial should be correctly but make sure
      console.log('CreateUserComponent!!');
    }

    onSubmit(): void{
      // Retrive users from localStoreage
      let products : Product[] = JSON.parse(localStorage.getItem('product') || '[]');

      // Update or add product
      if (this.isUpdate){
        // update the product if sNumber matchs
        products : products.map((product) => (product.sNumber === this.p.sNumber? this.p : product));        
      } else {
        // Add a new product to the array
        products.push(this.p);
      }

      // Save the updated list of product back to localstorage
      localStorage.setItem('product', JSON.stringify(products));

      // reset the 'u' object
      this.p = new Product('', 0, 0, new Date(''), new Date(''),'', '',0);

      // navigate to the table page
      this.router.navigate(['/list-product']);
    }
}