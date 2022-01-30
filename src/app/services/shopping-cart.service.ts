import { Item } from '../item';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  cartItems: Item[] = [];

  constructor() { }

  addToCart(item: Item) {
    this.cartItems.push(item);
  }

  getCartItems() {
    return this.cartItems;
  }

  removeCartItem(item: Item) {
    this.cartItems.forEach((element, index)=>{
      if(element==item) this.cartItems.splice(index,1);
   });
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
  }
}
