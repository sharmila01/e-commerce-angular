import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../../models/admin-models/product.model';
import { CartItem } from '../../models/customer-models/cart-item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: CartItem[] = [];
  private cartItemsSubject: BehaviorSubject<CartItem[]> = new BehaviorSubject<CartItem[]>(this.cartItems);

  getCartItems(): Observable<CartItem[]> {
    return this.cartItemsSubject.asObservable();
  }

  addToCart(product: Product, quantity: number = 1): void {
    const itemIndex = this.cartItems.findIndex(item => item.product.productId === product.productId);
    if (itemIndex !== -1) {
      this.cartItems[itemIndex].quantity += quantity;
    } else {
      this.cartItems.push({ product, quantity });
    }
    this.cartItemsSubject.next(this.cartItems);
  }

  updateCartItem(productId: number, quantity: number): void {
    const itemIndex = this.cartItems.findIndex(item => item.product.productId === productId);
    if (itemIndex !== -1) {
      this.cartItems[itemIndex].quantity = quantity;
      if (quantity === 0) {
        this.cartItems.splice(itemIndex, 1);
      }
      this.cartItemsSubject.next(this.cartItems);
    }
  }

  removeCartItem(productId: number): void {
    const itemIndex = this.cartItems.findIndex(item => item.product.productId === productId);
    if (itemIndex !== -1) {
      this.cartItems.splice(itemIndex, 1);
      this.cartItemsSubject.next(this.cartItems);
    }
  }

  clearCart(): void {
    this.cartItems = [];
    this.cartItemsSubject.next(this.cartItems);
  }
}
