import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../../services/customer-services/cart.service';
import { CartItem } from '../../../models/customer-models/cart-item.model';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  imports: [CommonModule,FormsModule]
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];

  constructor(private cartService: CartService,private router: Router) {}

  ngOnInit(): void {
    this.cartService.getCartItems().subscribe((items) => {
      this.cartItems = items;
    });
  }

  updateQuantity(productId: number, quantity: number): void {
    this.cartService.updateCartItem(productId, quantity);
  }

  removeItem(productId: number): void {
    this.cartService.removeCartItem(productId);
  }

  clearCart(): void {
    this.cartService.clearCart();
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
  }

  proceedToCheckout(): void {
    this.router.navigate(['/checkout']);
  }
}
