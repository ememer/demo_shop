import { BestSellerQuery } from './BestSellerQuery';

// export interface Order extends BestSellerQuery['products']['data'][0] {
//   quantity: number;
//   configuration: string;
// }

type Order = BestSellerQuery['products']['data'][0] & {
  quantity: number;
  configuration: string;
  model: string;
};

export type OrderTypes = {
  isBasketOpen: boolean;
  setIsBasketOpen: React.Dispatch<React.SetStateAction<boolean>>;
  basket: Order[];
  setBasket: React.Dispatch<React.SetStateAction<Order[]>>;
};
