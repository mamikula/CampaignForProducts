import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Campaign } from 'src/app/classes/campaign';
import { Product } from 'src/app/classes/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = []
  campaigns: string[] = []
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    })
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id);
  }

  reloadCurrentPage() {
    window.location.reload();
  }

  getCampaignName(product : Product): string{
    if (product.campaign == null ) return "noCampaign";
    else return product.campaign.campaignName;
  }

}
