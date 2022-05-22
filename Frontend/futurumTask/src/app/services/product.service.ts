import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../classes/product';
import { Campaign } from '../classes/campaign';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url = "http://localhost:8080/product";
  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this.url}/allProducts`)
  }

  getProduct(id: number): Observable<Product> {
    return this.httpClient.get<Product>(`${this.url}/getProduct?id=${id}`);
  }

  addProduct(product: Product): void {
    this.httpClient.post<Product>(`${this.url}/addProduct`, product).subscribe();
  }

  updateProduct(id: number, product: Product): Observable<Object> {
    return this.httpClient.put<Product>(`${this.url}/updateProduct?id=${id}`, product);
  }

  deleteProduct(id: number): void {
    this.httpClient.delete<Product>(`${this.url}/deleteProduct?id=${id}`).subscribe();
  }

  addCampaignToProduct(id: number, campaign: Campaign) {
    return this.httpClient.post(`${this.url}/addCampaignToProduct?id=${id}`, campaign)
  }

}