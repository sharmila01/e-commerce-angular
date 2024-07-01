import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InventoryService {
  private apiUrl = 'http://your-api-url';

  constructor(private http: HttpClient) {}

  getInventory(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/inventory`);
  }

  getWarehouses(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/warehouses`);
  }

  addWarehouse(warehouse: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/warehouses`, warehouse);
  }

  getStockAlerts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/alerts`);
  }

  addStockAlert(alert: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/alerts`, alert);
  }
}
