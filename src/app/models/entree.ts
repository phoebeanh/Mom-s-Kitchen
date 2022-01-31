export interface Entree {
    idField: string;
    name: string;
    price: number;
    description: string;
    mealType: string[];
    isVegan: boolean;
    isVegetarian: boolean;
    quantity: number;
}