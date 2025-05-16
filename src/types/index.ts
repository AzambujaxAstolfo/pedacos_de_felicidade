export interface MenuItemType {
  id: number;
  name: string;
  description: string;
  image: string;
}

export interface CakeFlavor extends MenuItemType {
  category: 'flavor';
}

export interface CakeTopping extends MenuItemType {
  category: 'topping';
}

export interface CakeDecoration extends MenuItemType {
  category: 'decoration';
}

export interface ReservationFormData {
  fullName: string;
  phone: string;
  cakeFlavor: string;
  toppings: string[];
  decorations: string[];
  additionalNotes: string;
  reservationDate: string;
}

export type ButtonVariant = 'primary' | 'secondary' | 'outline';