import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Truck } from '../models/truck';

@Injectable({
  providedIn: 'root',
})
export class TrucksService {
  private baseUrl = 'api/trucks';

  constructor(private http: HttpClient) {}

  retrieveAll(): Observable<Truck[]> {
    return this.http.get<Truck[]>(this.baseUrl);
  }

  randomOne(): Observable<Truck> {
    return this.retrieveAll().pipe(map(this.chooseOne));
  }

  private chooseOne<T>(items: T[]): T {
    return items[Math.floor(Math.random() * items.length)];
  }
}
