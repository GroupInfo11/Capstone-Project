export class Product {
  product_id:string;
  product_name: string;
  product_image: string;
  price: string;
  version: string;

  constructor(product_id, name,imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR608TWmLRWFNYPlY5xgKkgZPYe7mwv0GDMDtAS9nRdlVo4aytG',price = '0',version='0' ) {
    this.product_id = product_id
    this.product_name = name
    this.product_image = imageUrl
    this.price = price
    this.version = version
  }
}
