import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../../models/admin-models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://example.com/api/products'; // Replace with your actual API endpoint

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  getProduct(productId: number): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/${productId}`);
  }

  getFlashSaleProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }
  
  searchProducts(query: string, category?: string, priceRange?: [number, number], brand?: string): Observable<Product[]> {
    let params: any = { query };
    if (category) params.category = category;
    if (priceRange) {
      params.minPrice = priceRange[0];
      params.maxPrice = priceRange[1];
    }
    if (brand) params.brand = brand;

    return this.http.get<Product[]>(this.apiUrl, { params });
  }

  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product);
  }

  updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.apiUrl}/${product.productId}`, product);
  }

  deleteProduct(productId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${productId}`);
  }

  bulkImport(file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    return this.http.post(`${this.apiUrl}/import`, formData);
  }

  bulkExport(): Observable<any> {
    return this.http.get(`${this.apiUrl}/export`, { responseType: 'blob' });
  }

 
}
