import { Component, OnInit } from '@angular/core';
import {ProductService } from '../product.service';
import { Product } from '../product.model';
;


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
products: Product[] = [];
lanaguges:Product[]=[];

  constructor(private productService: ProductService){}
  ngOnInit(): void {
    this.productService.getProducts().subscribe(data=>{
      this.products=data;
      })
    
  }
   
 
}
