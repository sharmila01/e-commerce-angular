import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Order } from '../../../../models/admin-models/order.model';
import { OrderService } from '../../../../services/admin-services/order.service';

@Component({
  selector: 'app-order-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './order-list.component.html',
  styleUrl: './order-list.component.scss'
})
export class OrderListComponent {
  orders: Order[] = [];
  searchTerm: string = '';
  sortField: string = 'date';
  sortDirection: 'asc' | 'desc' = 'asc';

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.loadOrders();
  }

  loadOrders() {
    this.orderService.getOrders().subscribe(data => {
      this.orders = data;
    });
  }

  searchOrders() {
    this.orderService.searchOrders(this.searchTerm).subscribe(data => {
      this.orders = data;
    });
  }

  sortOrders(field: string) {
    this.sortField = field;
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    this.orderService.sortOrders(this.sortField, this.sortDirection).subscribe(data => {
      this.orders = data;
    });
  }
}
