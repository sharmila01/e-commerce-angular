import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../../services/admin-services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {
  id!: number;
  product: any;

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.productService.getProduct(this.id).subscribe(data => {
      this.product = data;
    });
  }
}
