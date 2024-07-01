import { Product } from "../admin-models/product.model";

export interface CartItem {
  product: Product;
  quantity: number;
}
