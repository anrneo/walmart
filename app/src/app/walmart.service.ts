import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WalmartService {

  constructor(
    private http: HttpClient
  ) { }

  getProducts() {
    return this.http.get('http://localhost:3000/api/products');
  }

  searchBrand(brand:string) {
    return this.http.get('http://localhost:3000/api/products/brands?brand='+brand);
  }

  getDiscounts(){
    return this.http.get('http://localhost:3000/api/discounts');
  }
}
