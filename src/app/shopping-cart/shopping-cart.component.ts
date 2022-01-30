import { ShoppingCartService } from './../services/shopping-cart.service';
import { Component, OnInit } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  items = this.cartService.getItems();

  constructor(private cartService: ShoppingCartService) { }

  ngOnInit(): void {
  }

  incrementItemQuantity(item: Item) {
    item.quantity++;
  }

  decrementItemQuantity(item: Item) {
    item.quantity--;
  }

}
