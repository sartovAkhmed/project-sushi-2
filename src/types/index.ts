export interface SushiItem {
  id: number;
  name: string;
  description: string;
  price: number;
  weight: number;
  imageUrl: string;
  category: Category;
  ingredients: string[];
  isSpicy?: boolean;
  isVegetarian?: boolean;
  isNew?: boolean;
  discount?: number;
}

export type Category = 'rolls' | 'sets' | 'sushi' | 'drinks';

export interface CartItem {
  item: SushiItem;
  quantity: number;
}