import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../../models/admin-models/product.model';
import { CartService } from '../../../services/customer-services/cart.service';

@Component({
  selector: 'app-add-to-cart',
  standalone: true,
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss'],
  imports: [CommonModule]
})
export class AddToCartComponent {
  @Input() product!: Product;

  constructor(private cartService: CartService) {}

  addToCart(): void {
    this.cartService.addToCart(this.product);
  }
}
