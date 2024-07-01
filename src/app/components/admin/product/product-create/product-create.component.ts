import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../../../services/admin-services/product.service';

@Component({
  selector: 'app-product-create',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.scss'
})
export class ProductCreateComponent {
  product: any = {};

  constructor(private productService: ProductService, private router: Router) { }

  createProduct() {
    this.productService.createProduct(this.product).subscribe(data => {
      this.router.navigate(['/products']);
    });
  }
}
