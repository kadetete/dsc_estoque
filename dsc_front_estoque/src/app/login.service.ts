import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  autenticado = false;

  constructor(private http: HttpClient, private cookieService: CookieService) { }
  apiUrl = 'http://backend:8080/login'

  login(user: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}`, {login: user, senha: password})
    .pipe(
      tap((response: any) => {
        if (response.token) {
          this.cookieService.set('authToken', response.token);
        }
      })
    );
  }

  logout(): void {
    this.cookieService.deleteAll();
    this.autenticado = false;
  }

  isAutenticado(): boolean {
    const authToken = this.cookieService.get('authToken');
    if (authToken) {
      this.autenticado = true;
      return true;
    }
    this.autenticado = false;
    return false;
  }
}
