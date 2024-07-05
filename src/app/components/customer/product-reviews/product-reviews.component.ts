import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Review } from '../../../models/customer-models/review.model';
import { ReviewService } from '../../../services/customer-services/review.service';

@Component({
  selector: 'app-product-reviews',
  standalone: true,
  templateUrl: './product-reviews.component.html',
  styleUrls: ['./product-reviews.component.scss'],
  imports: [CommonModule]
})
export class ProductReviewsComponent implements OnInit {
  @Input() productId!: number;
  reviews: Review[] = [];

  constructor(private reviewService: ReviewService) {}

  ngOnInit(): void {
    this.reviewService.getReviews(this.productId).subscribe(reviews => {
      this.reviews = reviews;
    });
  }
}
