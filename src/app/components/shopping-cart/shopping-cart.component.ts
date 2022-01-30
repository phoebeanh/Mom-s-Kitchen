import { ShoppingCartService } from '../../services/shopping-cart.service';
import { Component, OnInit } from '@angular/core';
import { Item } from '../../item';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  items = this.cartService.getCartItems();

  constructor(private cartService: ShoppingCartService) { }

  ngOnInit(): void {}

  incrementItemQuantity(item: Item) {
    this.cartService.incrementItemQuantity(item);
  }

  decrementItemQuantity(item: Item) {
    this.cartService.decrementItemQuantity(item);
  }

  deleteItem(item: Item) {
    this.cartService.removeCartItem(item);
  }

  clearCart() {
    this.items = this.cartService.clearCart();
  }
}
