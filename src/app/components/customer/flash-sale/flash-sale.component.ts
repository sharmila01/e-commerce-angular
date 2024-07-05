import { Component } from '@angular/core';
import { Product } from '../../../models/admin-models/product.model';
import { ProductService } from '../../../services/admin-services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-flash-sale',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './flash-sale.component.html',
  styleUrl: './flash-sale.component.scss'
})
export class FlashSaleComponent {
  flashSaleProducts: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getFlashSaleProducts().subscribe(products => {
      this.flashSaleProducts = products;
    });
  }
}
