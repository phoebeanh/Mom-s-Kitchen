import { items } from '../item';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  //TODO TEMPORARY ITEMS FOR DUMMY DEMONSTRATION
  items = items;
  
  ngOnInit(): void {}




}
