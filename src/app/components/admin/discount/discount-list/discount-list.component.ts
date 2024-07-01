import { Component } from '@angular/core';
import { Discount } from '../../../../models/admin-models/discount.model';
import { DiscountService } from '../../../../services/admin-services/discount.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-discount-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './discount-list.component.html',
  styleUrl: './discount-list.component.scss'
})
export class DiscountListComponent {
  discounts: Discount[] =  [];

  constructor(private discountService: DiscountService) {}

  ngOnInit() {
    this.loadDiscounts();
  }

  loadDiscounts() {
    this.discountService.getDiscounts().subscribe(discounts => {
      this.discounts = discounts;
    });
  }

  deleteDiscount(id: number) {
    this.discountService.deleteDiscount(id).subscribe(() => {
      // Reload discounts after deletion
      this.loadDiscounts();
    });
  }
}
