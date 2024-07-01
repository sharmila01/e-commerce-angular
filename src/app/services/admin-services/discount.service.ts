import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Discount } from '../../models/admin-models/discount.model';

@Injectable({
  providedIn: 'root'
})
export class DiscountService {
  private apiUrl = 'https://api.example.com/discounts'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  getDiscounts(): Observable<Discount[]> {
    return this.http.get<Discount[]>(this.apiUrl);
  }

  getDiscountById(id: number): Observable<Discount> {
    return this.http.get<Discount>(`${this.apiUrl}/${id}`);
  }

  createDiscount(discount: Discount): Observable<Discount> {
    return this.http.post<Discount>(this.apiUrl, discount);
  }

  updateDiscount(discount: Discount): Observable<Discount> {
    return this.http.put<Discount>(`${this.apiUrl}/${discount.id}`, discount);
  }

  deleteDiscount(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
