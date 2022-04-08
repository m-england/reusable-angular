import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Kitten } from '../models/kitten';
import { chooseOne } from '../utility/random-picker';

@Injectable({
  providedIn: 'root',
})
export class KittensService {
  private baseUrl = 'api/kittens';

  constructor(private http: HttpClient) {}

  retrieveAll(): Observable<Kitten[]> {
    return this.http.get<Kitten[]>(this.baseUrl);
  }

  randomOne(): Observable<Kitten> {
    return this.retrieveAll().pipe(map(chooseOne));
  }

  vote(chosen: Kitten) {
    //TODO: Maybe do something with this data.  Also, if we want to record winners and losers, this should be in a different service.
  }
}
