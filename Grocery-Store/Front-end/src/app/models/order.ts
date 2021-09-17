import { Product } from './product';

export class Order {
  _id:String;
  orderID:Number;
  email:String;
  Order:[{
    productName:String,
    ProductPrice:String,
    ProductId:String,
    created_at: { type: Date, default: String },
  }];
  totalPrice:Number;
  orderStatus:String;
  __v:Number;
  user:String;
}
