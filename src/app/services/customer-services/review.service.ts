import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Review } from '../../models/customer-models/review.model';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private reviews: Review[] = [];
  private reviewSubject: BehaviorSubject<Review[]> = new BehaviorSubject<Review[]>([]);

  constructor() {}

  getReviews(productId: number): Observable<Review[]> {
    const productReviews = this.reviews.filter(review => review.productId === productId);
    this.reviewSubject.next(productReviews);
    return this.reviewSubject.asObservable();
  }

  addReview(review: Review): void {
    this.reviews.push(review);
    const productReviews = this.reviews.filter(r => r.productId === review.productId);
    this.reviewSubject.next(productReviews);
  }
}
