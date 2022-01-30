import { Item, items } from './../item';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private items = items;

  constructor() {}

  getItems() : Item[] {
    return this.items;
  }
}
