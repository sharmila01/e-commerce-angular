import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

interface RegisterData {
  name: string;
  email: string;
  password: string;
}

interface LoginData {
  email: string;
  password: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = 'http://your-api-endpoint.com/auth'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  register(data: RegisterData) {
    return this.http.post<any>(`${this.apiUrl}/register`, data)
      .pipe(tap(() => console.log('Registration successful!')));
  }

  login(data: LoginData) {
    return this.http.post<any>(`${this.apiUrl}/login`, data)
      .pipe(tap(response => {
        // Store auth token (e.g., in local storage)
        localStorage.setItem('auth_token', response.token);
      }));
  }
}
