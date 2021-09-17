import { Products } from "../products";

export class Order {
  _id:String;
  orderID:Number;
  email:String;
  Order:Products[];
  totalPrice:Number;
  orderStatus:String;
  __v:Number;
  user:String;
}
