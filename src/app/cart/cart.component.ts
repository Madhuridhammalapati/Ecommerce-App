import { Component, OnInit } from '@angular/core';
import { CartService, CartItem } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  totalPrice: number = 0;
  constructor(private cartService: CartService) {}
  ngOnInit(): void {
    this.cartService.cartItems$.subscribe(items=>{
      this.cartItems=items;
      this.totalPrice=this.cartService.getTotalPrice(this.cartItems);
    });
  }
   
  increaseItemQuantity(productId: number): void {
    this.cartService.increaseQuantity(productId);
    
  }
  decreaseItemQuantity(productId: number): void {
    this.cartService.decreaseQuantity(productId);

  }
  deleteItem(productId: number): void {
    this.cartService.deleteFromCart(productId);
 
  }
  clearCart(): void {
    this.cartService.clearCart();

  }
}
