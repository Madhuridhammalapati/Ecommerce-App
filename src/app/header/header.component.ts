import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  implements OnInit{
  cartCount=0;
  constructor(public cartService: CartService) {}
ngOnInit(): void {
    this.cartService.cartCount$.subscribe((data)=>{
      this.cartCount=data;
    })
}
}
