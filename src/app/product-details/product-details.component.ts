import { Component, OnInit} from '@angular/core';
import { ProductService } from '../product.service';
import {Product} from '../product.model';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

product!:Product;   // used ! to  give prosmise we aasign the vale before using it 
  constructor(private productService:ProductService,
              private route:ActivatedRoute,
            private cartService:CartService) {}
ngOnInit(): void {
    const id=+this.route.snapshot.paramMap.get("id")!;   //tAKES THE ID  + i used to convert to number shortcut
    this.productService.getProductById(id).subscribe((data)=>{ //request the data  of specific id from server
      this.product=data as Product;
    })
    } 
    addTocart(){
      this.cartService.addToCart(this.product);
      alert(`${this.product.title}added to cart`);
    }
   }
  

