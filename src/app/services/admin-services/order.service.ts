import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../../models/admin-models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl = 'http://your-api-url/orders';

  constructor(private http: HttpClient) { }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.apiUrl);
  }

  searchOrders(term: string): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.apiUrl}?search=${term}`);
  }

  sortOrders(field: string, direction: 'asc' | 'desc'): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.apiUrl}?sort=${field}&direction=${direction}`);
  }

  getOrder(id: number): Observable<Order> {
    return this.http.get<Order>(`${this.apiUrl}/${id}`);
  }

  updateOrder(order: Order): Observable<Order> {
    return this.http.put<Order>(`${this.apiUrl}/${order.id}`, order);
  }

  issueRefund(id: number): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/${id}/refund`, {});
  }

  generateInvoice(id: number): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/${id}/invoice`, {});
  }
}
