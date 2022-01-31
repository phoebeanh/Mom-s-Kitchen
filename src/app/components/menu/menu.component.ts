import { ItemService } from './../../services/item.service';
import { Component, OnInit } from '@angular/core';
import { Entree } from 'src/app/models/entree';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  entrees? : Entree[];

  constructor(private itemService: ItemService, private router : Router) {}

  ngOnInit(): void {
    this.retrieveItems();
  }

  retrieveItems(): void {
    this.itemService.getAll().subscribe((res : Entree[]) =>(this.entrees = res));
  }

  routeTo(entree:Entree) {
    this.router.navigate(['/item'], { state: { item: entree}});
  }

}
