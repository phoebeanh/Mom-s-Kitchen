import { Item, items } from './../item';
import { ShoppingCartService } from './../services/shopping-cart.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu-item-details',
  templateUrl: './menu-item-details.component.html',
  styleUrls: ['./menu-item-details.component.css']
})
export class MenuItemDetailsComponent implements OnInit {

  item: Item | undefined;

  constructor(private route: ActivatedRoute,
    private cartService: ShoppingCartService) { 
      // First get the item id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const itemIdFromRoute = Number(routeParams.get('itemId'));

    // Find the item that correspond with the id provided in route.
    this.item = items.find(item => item.id === itemIdFromRoute);
    }

  ngOnInit(): void {
  }


  addToCart(item: Item) {
    this.cartService.addToCart(item);
    window.alert('Your item has been added to the cart!');
  }

}
