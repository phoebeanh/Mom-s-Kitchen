import { Entree } from "./entree"

export interface Items{
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

  export class Item implements Items {
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
