import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dessert } from '../models/dessert';

@Injectable({
  providedIn: 'root',
})
export class DessertsService {
  private baseUrl = 'api/desserts';

  constructor(private http: HttpClient) {}

  retrieve(): Observable<Dessert[]> {
    return this.http.get<Dessert[]>(this.baseUrl);
  }
}
