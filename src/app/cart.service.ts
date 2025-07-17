import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './product.model';
export interface CartItem {
  product: Product;
  quantity: number;
}
@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: CartItem[] = [];
  private cartCount = new BehaviorSubject<number>(0);
  cartCount$ = this.cartCount.asObservable();
  private cartItemsSubject=new BehaviorSubject<CartItem[]>([]);
  cartItems$=this.cartItemsSubject.asObservable();
 
  constructor() {}
   private updateCartState() {
    this.cartItemsSubject.next(this.cartItems); // broadcast cart updates
    this.cartCount.next(this.getTotalQuantity()); // update total quantity
  }
  addToCart(product: Product) {
    const index = this.cartItems.findIndex(item => item.product.id === product.id);
    if (index !== -1) {
      this.cartItems[index].quantity++;
    } else {
      this.cartItems.push({ product, quantity: 1 });
    }
    this.updateCartState(); 
    
  }
  getFromCart(): CartItem[] {
    return this.cartItems;
  }
  increaseQuantity(productId: number) {
    const item = this.cartItems.find(item => item.product.id === productId); // find the cart item  with the  given cartitem
    if (item) {    // if we have the item
      item.quantity++;    // increase the item quantity
      this.updateCartState();  
    
    }
  }

  decreaseQuantity(productId: number) {
    const item = this.cartItems.find(item => item.product.id === productId);//find the item with given cart item 
    if (item) {  // if item exist 
      if (item.quantity > 1) {   // if existed itemquantity >1
        item.quantity--;    // decrese the quantity by 1
      } else {
        this.deleteFromCart(productId); // else delete  item if =1 
        return;
      }
     this.updateCartState(); 
    }
  }

  deleteFromCart(productId: number) {
    this.cartItems = this.cartItems.filter(item => item.product.id !== productId); // if the cartitem is not equal to item given store in cartitems id equal remove
   this.updateCartState(); 
  }

  clearCart() {
    this.cartItems = [];   // make the list empty
    this.cartCount.next(0); // quantity is 0
  }

  getTotalPrice(items:CartItem[]): number {
    return this.cartItems.reduce((total, item) => total + item.product.price * item.quantity,0 );
  }// reduce 

  private getTotalQuantity(): number {
    return this.cartItems.reduce((total, item) => total + item.quantity, 0);
  }
}
