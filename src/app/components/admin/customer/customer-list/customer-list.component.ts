import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Customer } from '../../../../models/admin-models/customer.model';
import { CustomerService } from '../../../../services/admin-services/customer.service';

@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.scss'
})
export class CustomerListComponent {
  customers: Customer[] = []; // Initialize with an empty array

  constructor(private customerService: CustomerService) {}

  ngOnInit() {
    this.loadCustomers();
  }

  loadCustomers() {
    this.customerService.getCustomers().subscribe(customers => {
      this.customers = customers;
    });
  }

  deleteCustomer(id: number) {
    this.customerService.deleteCustomer(id).subscribe(() => {
      // Reload customers after deletion
      this.loadCustomers();
    });
  }
}
