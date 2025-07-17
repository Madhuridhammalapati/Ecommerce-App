import { Component, OnInit } from '@angular/core';
import { CartItem, CartService } from '../cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {
  userData={
    name:'',
    email:'',
    Address:'',
  }
cartItems:CartItem[]=[];
total=0;
  constructor(private cartService:CartService,private router:Router){}
  ngOnInit(): void {
  this.cartItems=this.cartService.getFromCart();
  this.total=this.cartService.getTotalPrice(this.cartItems);
  }

onSubmit(){
    localStorage.setItem('orderData', JSON.stringify(this.userData));
   this.router.navigate(['/payment']);
  }
 
}
