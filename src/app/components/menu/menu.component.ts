import { ItemService } from './../../services/item.service';
import { Item} from './../../item';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items : Item[];

  constructor(itemService: ItemService) {
    this.items = itemService.getItems();
  }
  
  ngOnInit(): void {}


}
