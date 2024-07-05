import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Review } from '../../../models/customer-models/review.model';
import { ReviewService } from '../../../services/customer-services/review.service';

@Component({
  selector: 'app-add-review',
  standalone: true,
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.scss'],
  imports: [CommonModule, ReactiveFormsModule]
})
export class AddReviewComponent {
  @Input() productId!: number;  // Use non-null assertion operator
  reviewForm: FormGroup;

  constructor(private fb: FormBuilder, private reviewService: ReviewService) {
    this.reviewForm = this.fb.group({
      userName: ['', Validators.required],
      rating: [5, [Validators.required, Validators.min(1), Validators.max(5)]],
      comment: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.reviewForm.valid && this.productId) {
      const review: Review = {
        productId: this.productId,
        userId: Math.floor(Math.random() * 1000), 
        // Replace with actual user ID from authentication
        userName: this.reviewForm.get('userName')?.value,
        rating: this.reviewForm.get('rating')?.value,
        comment: this.reviewForm.get('comment')?.value,
        date: new Date()
      };
      this.reviewService.addReview(review);
      this.reviewForm.reset({ rating: 5 });
    }
  }
}
