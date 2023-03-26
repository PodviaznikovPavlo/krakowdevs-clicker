import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(
    private http: HttpClient
  ) {}

  saveClick(clicks: number) {
    return this.http.post("http://localhost:3000/click", { clicks });
  }

  getClicks(email: string) {
    return this.http.get(`http://localhost:3000/clicks`);
  }
}