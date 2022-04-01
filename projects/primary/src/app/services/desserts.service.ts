import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Dessert } from '../models/dessert';
import { chooseOne } from '../utility/random-picker';

@Injectable({
  providedIn: 'root',
})
export class DessertsService {
  private baseUrl = 'api/desserts';

  constructor(private http: HttpClient) {}

  retrieveAll(): Observable<Dessert[]> {
    return this.http.get<Dessert[]>(this.baseUrl);
  }

  randomOne(): Observable<Dessert> {
    return this.retrieveAll().pipe(map(chooseOne));
  }

  vote(chosen: Dessert) {
    //TODO: Maybe do something with this data.  Also, if we want to record winners and losers, this should be in a different service.
  }
}
