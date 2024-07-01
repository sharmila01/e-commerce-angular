import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl = 'http://your-api-url';

  constructor(private http: HttpClient) { }

  getCategories(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/categories`);
  }

  searchCategories(term: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/categories/search?term=${term}`);
  }

  createCategory(category: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/categories`, category);
  }

  getCategory(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/categories/${id}`);
  }

  updateCategory(id: number, category: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/categories/${id}`, category);
  }

  deleteCategory(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/categories/${id}`);
  }
}
