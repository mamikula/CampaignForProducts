import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Campaign } from 'src/app/classes/campaign';
import { Product } from 'src/app/classes/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  product: Product;
  len: number = 0;
  constructor(private productService: ProductService) {
    this.productService.getProducts().forEach(a => {
      this.len += 1;
    })
    this.product = new Product(this.len, "", -1)
  }

  ngOnInit(): void {
  }

  addProduct() {
    this.productService.addProduct(this.product);
  }

  onSubmit() {
    this.addProduct();
  }
}
