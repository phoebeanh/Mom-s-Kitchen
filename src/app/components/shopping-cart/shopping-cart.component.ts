import { ShoppingCartService } from '../../services/shopping-cart.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Item } from 'src/app/models/items';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  router: any;

  constructor(public cartService: ShoppingCartService,
    private formBuilder: FormBuilder) {}

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
    this.cartService.clearCart();
  }

  onSubmit(): void {
    // Process checkout data here
    this.cartService.clearCart();
    this.router.navigate(['/booking']);
  }
}
