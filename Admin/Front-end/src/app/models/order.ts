import { Product } from './product';

export class Order {
  email: string;
  id: string;
  orders: Array<Product>;
}
