import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  constructor(private CartService:CartService){}
paymentSuccuess=false;
orderData:any;
ngOnInit(): void {
  const data = localStorage.getItem('orderData');
    if (data) {
      this.orderData = JSON.parse(data);
    }
    this.CartService.clearCart();
}
payment(){
  this.paymentSuccuess=true;
}
}
