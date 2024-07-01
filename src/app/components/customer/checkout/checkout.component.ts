import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartItem } from '../../../models/customer-models/cart-item.model';
import { CartService } from '../../../services/customer-services/cart.service';

@Component({
  selector: 'app-checkout',
  standalone: true,
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
  imports: [CommonModule, ReactiveFormsModule]
})
export class CheckoutComponent implements OnInit {
  checkoutForm: FormGroup;
  cartItems: CartItem[] = [];
  totalAmount: number = 0;

  constructor(
    private fb: FormBuilder,
    private cartService: CartService,
    private router: Router
  ) {
    this.checkoutForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      cardNumber: ['', [Validators.required, Validators.pattern(/^[0-9]{16}$/)]],
      expirationDate: ['', [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])\/[0-9]{2}$/)]],
      cvv: ['', [Validators.required, Validators.pattern(/^[0-9]{3}$/)]]
    });
  }

  ngOnInit(): void {
    this.cartService.getCartItems().subscribe((items) => {
      this.cartItems = items;
      this.totalAmount = this.cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
    });
  }

  onSubmit(): void {
    if (this.checkoutForm.valid) {
      // Process checkout here (e.g., call payment API)
      this.cartService.clearCart();
      this.router.navigate(['/thank-you']);
    }
  }
}
