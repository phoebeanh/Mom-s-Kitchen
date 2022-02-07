import { ItemService } from './../../services/item.service';
import { Component, OnInit } from '@angular/core';
import { Entree } from 'src/app/models/entree';
import { Router } from '@angular/router';
import { Item, Items } from 'src/app/models/items';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items : Items;
  filteredItems : Entree[];
  filters: Array<any> | undefined;

  constructor(private itemService: ItemService, private router : Router) {
    this.items = new Items();
    this.filteredItems = [];
  }

  ngOnInit(): void {
    this.retrieveItems();
  }

  onCheckboxChange(e:any) {
    e.checked = !e.checked;

    if(e.checked) {
      e.value.forEach((element: Entree) => {
        this.filteredItems.push(element);
      });
    } else {
      e.value.forEach((checkedBoxItem: Entree) => {
        console.log(this.filteredItems.length);
        this.filteredItems = this.filteredItems.filter((currentFilteredItem) => {
          return currentFilteredItem.name.toLowerCase() != checkedBoxItem.name.toLowerCase();
        });
      });
    }
  }


  retrieveItems(): void {
    this.itemService.getAll().subscribe((res: Items) => {
      this.items = res;
      this.filters = this.retrieveFilters();
    });
  }

  retrieveFilters(): Array<any> {
    return [
      {
        name: "Appetizers",
        value: this.items.appetizers,
        checked: false
      },
      {
        name: "Bread",
        value: this.items.bread,
        checked: false
      },
      {
        name: "Breakfast",
        value: this.items.breakfast,
        checked: false
      },
      {
        name: "Curry",
        value: this.items.curry,
        checked: false
      },
      {
        name: "Desserts",
        value: this.items.desserts,
        checked: false
      },
      {
        name: "Drinks",
        value: this.items.drinks,
        checked: false
      },
      {
        name: "Rice",
        value: this.items.rice,
        checked: false
      },
      {
        name: "Snacks",
        value: this.items.snacks,
        checked: false
      },
      {
        name: "Soup",
        value: this.items.soups,
        checked: false
      }
    ];
  }

  routeTo(entree:Entree) {
    this.router.navigate(['/item'], { state: { item: entree}});
  }

  public isEmpty() : boolean {
    if (this.filteredItems.length == 0) {
        return true;
      } else {
        return false;
      }
  }

}
