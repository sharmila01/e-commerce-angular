import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Customer } from '../../../../models/admin-models/customer.model';
import { CustomerService } from '../../../../services/admin-services/customer.service';

@Component({
  selector: 'app-customer-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customer-details.component.html',
  styleUrl: './customer-details.component.scss'
})
export class CustomerDetailsComponent {
  customerId!: number;
  customer!: Customer;

  constructor(
    private route: ActivatedRoute,
    private customerService: CustomerService
  ) {}

  ngOnInit() {
    const param=this.route.snapshot.paramMap.get('id');
    this.customerId = param?+param:0;
    this.loadCustomerDetails(this.customerId);
  }

  loadCustomerDetails(id: number) {
    this.customerService.getCustomerById(id).subscribe(customer => {
      this.customer = customer;
    });
  }

  updateCustomer() {
    this.customerService.updateCustomer(this.customer).subscribe(updatedCustomer => {
      this.customer = updatedCustomer;
      // Optionally add success message or navigation logic
    });
  }
}
