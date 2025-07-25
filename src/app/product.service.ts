import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{Product} from './product.model';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
private apiUrl='http://localhost:3000/products';
  constructor(private http:HttpClient) {}

  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.apiUrl);
  }
    getProductById(id:number):Observable<Product>{
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }

}
