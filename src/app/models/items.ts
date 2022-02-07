import { Entree } from "./entree"

export interface Item {
  id: number;
  name: string;
  price: number;
  description: string;
  mealType: string;
  isVegan: boolean;
  isVegetarian: boolean;
  quantity: number;
}
export interface ItemsInterface{
    appetizers: Entree[];
    bread: Entree[];
    breakfast: Entree[];
    curry: Entree[];
    desserts: Entree[];
    drinks: Entree[];
    rice: Entree[];
    snacks: Entree[];
    soups: Entree[];
  }

  export class Items implements ItemsInterface {
    appetizers: Entree[] = []; 
    bread: Entree[] = [];
    breakfast: Entree[] = [];
    curry: Entree[] = [];
    desserts: Entree[] = [];
    drinks: Entree[] = [];
    rice: Entree[] = [];
    snacks: Entree[] = [];
    soups: Entree[] = [];
  }
