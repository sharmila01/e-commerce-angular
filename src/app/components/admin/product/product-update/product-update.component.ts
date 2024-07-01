import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../../../services/admin-services/product.service';

@Component({
  selector: 'app-product-update',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-update.component.html',
  styleUrl: './product-update.component.scss'
})
export class ProductUpdateComponent {
  id!: number;
  product: any = {};

  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.productService.getProduct(this.id).subscribe(data => {
      this.product = data;
    });
  }

  updateProduct() {
    this.productService.updateProduct(this.id, this.product).subscribe(data => {
      this.router.navigate(['/products']);
    });
  }
}
