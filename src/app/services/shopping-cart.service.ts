import { Injectable } from '@angular/core';
import { Item } from '../models/items';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  cartItems: Item[] = [];

  constructor() { }

  addToCart(item: Item) {
    let exists = false;
    this.cartItems.forEach(c => {
      if(c.name == item.name) {
        exists = true;
        c.quantity += item.quantity;
      }
    });
    if (!exists) {
      this.cartItems.push(item);
    }
  }

  getCartItems() {
    return this.cartItems;
  }

  removeCartItem(item: Item) {
    this.cartItems = this.cartItems.filter(c => {return c.name != item.name});
  }

  clearCart() {
    this.cartItems = [];
    return this.cartItems;
  }

  incrementItemQuantity(item: Item) {
    item.quantity++;
  }

  decrementItemQuantity(item: Item) {
    item.quantity--;
    if (item.quantity == 0) {
      this.removeCartItem(item);
    }
  }
}
