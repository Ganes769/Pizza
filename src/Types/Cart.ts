export interface menuItem {
  id: number;
  name: string;
  unitPrice: number;
  soldOut: boolean;
  imageUrl: string;
  quantity: number;
}

export interface menuProps {
  menu: menuItem[];
}
