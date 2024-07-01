import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Discount } from '../../../../models/admin-models/discount.model';
import { DiscountService } from '../../../../services/admin-services/discount.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-discount-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './discount-details.component.html',
  styleUrl: './discount-details.component.scss'
})
export class DiscountDetailsComponent {
  discountId!: number;
  discount!: Discount;

  constructor(
    private route: ActivatedRoute,
    private discountService: DiscountService
  ) {}

  ngOnInit() {
    const param=this.route.snapshot.paramMap.get('id');
    this.discountId = param?+param:0;
    this.loadDiscountDetails(this.discountId);
  }

  loadDiscountDetails(id: number) {
    this.discountService.getDiscountById(id).subscribe(discount => {
      this.discount = discount;
    });
  }

  updateDiscount() {
    this.discountService.updateDiscount(this.discount).subscribe(updatedDiscount => {
      this.discount = updatedDiscount;
      // Optionally add success message or navigation logic
    });
  }
}
