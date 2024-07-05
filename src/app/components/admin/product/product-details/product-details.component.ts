import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../../services/admin-services/product.service';
import { CommonModule } from '@angular/common';
import { AddReviewComponent } from '../../../customer/add-review/add-review.component';
import { ProductReviewsComponent } from '../../../customer/product-reviews/product-reviews.component';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule,AddReviewComponent,ProductReviewsComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit {
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
