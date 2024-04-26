export interface menuItem {
  id: number;
  name: string;
  unitPrice: number;
  soldOut: boolean;
  totalPrice: number;
  imageUrl: string;
  quantity: number;
}

export interface menuProps {
  menu: menuItem[];
}
export interface cartSliceType {
  id: number;
  totalPrice: number;
  name: string;
  unitPrice: number;
  imageUrl: string;
  quantity?: number;
}
export interface addToCartType {
  cart: cartSliceType[];
}
