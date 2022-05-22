import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/classes/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
id:number;
product: Product;

  constructor(private productService: ProductService) { 
    this.product = history.state;
    this.id = this.product.productID;
  }

  ngOnInit(): void {
  }

  updateProduct(){
    this.productService.updateProduct(this.id, this.product).subscribe();
  }

}
