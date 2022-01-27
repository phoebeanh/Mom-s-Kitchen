export interface Item {
    id: number;
    name: string;
    price: number;
    description: string;
    mealType: string;
    isVegan: boolean;
    isVegetarian: boolean;
}

// TEMPORARY HOLDING OF DUMMY DATA UNTIL DB IS SET UP
export const items = [
    {
      id: 1,
      name: 'Gobi Manchurian',
      price: 12.95,
      description: 'A delicious dish with friend cauliflower and a savory sauce',
      mealType: 'Lunch',
      isVegan: false,
      isVegetarian: false
    },
    {
      id: 2,
      name: 'Chicken 65',
      price: 15.95,
      description: 'A spicy, deep-fried chicken dish originating from Hotel Buhari, Chennai, India, as an entrée, or quick snack',
      mealType: 'Lunch',
      isVegan: false,
      isVegetarian: false
    },
    {
      id: 3,
      name: 'Kalmi Kebab',
      price: 13.95,
      description: 'A delicious kebab from the Mughlai cuisine, marinated with spices and yoghurt.',
      mealType: 'Lunch',
      isVegan: false,
      isVegetarian: false
    }
  ];