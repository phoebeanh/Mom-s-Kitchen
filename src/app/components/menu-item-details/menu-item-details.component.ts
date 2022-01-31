import { ItemService } from './../../services/item.service';
import { Item, items } from '../../item';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Navigation, Router } from '@angular/router';
import { Entree } from 'src/app/models/entree';

@Component({
  selector: 'app-menu-item-details',
  templateUrl: './menu-item-details.component.html',
  styleUrls: ['./menu-item-details.component.css']
})
export class MenuItemDetailsComponent implements OnInit {

  item: any;
  nav: any;

  constructor(private route: ActivatedRoute,
    public cartService: ShoppingCartService,
    public itemService: ItemService, private router: Router) {
      this.nav = this.router.getCurrentNavigation();

      if (this.nav.extras && this.nav.extras.state && this.nav.extras.state['item']) {
      this.item = this.nav.extras.state['item'] as Entree;
      };
    }

    ngOnInit() {}

  incrementItemQuantity(item: Item) {
    this.cartService.incrementItemQuantity(item);
  }

  decrementItemQuantity(item: Item) {
    this.cartService.decrementItemQuantity(item);
  }
  
  addToCart(item: Item) {
    this.cartService.addToCart(item);
    window.alert('Your item has been added to the cart!');
  }

}
