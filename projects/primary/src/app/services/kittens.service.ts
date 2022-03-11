import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Kitten } from '../models/kitten';

@Injectable({
  providedIn: 'root',
})
export class KittensService {
  private baseUrl = 'api/kittens';

  constructor(private http: HttpClient) {}

  retrieve(): Observable<Kitten[]> {
    return this.http.get<Kitten[]>(this.baseUrl);
  }
}
