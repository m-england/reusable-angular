import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { Dessert } from '../models/dessert';
import { Kitten } from '../models/kitten';

@Injectable({
  providedIn: 'root',
})
export class MemoryApiService implements InMemoryDbService {
  createDb(): {} | Observable<{}> | Promise<{}> {
    const kittens: Kitten[] = [
      {
        name: 'Choo Choo Bone Wagon',
        age: 3,
        favoriteToy: 'yarn',
        spayedOrNeutered: true,
        imageUrl: '',
        ugly: 3,
      },
      {
        name: 'Spot',
        age: 3,
        favoriteToy: 'cardboard box',
        spayedOrNeutered: false,
        imageUrl: '',
        ugly: 2,
      },
      {
        name: 'Mittens',
        age: 50,
        favoriteToy: 'the couch',
        spayedOrNeutered: true,
        imageUrl: '',
        ugly: 5,
      },
    ];

    const desserts: Dessert[] = [
      {
        name: 'Creme Brulee',
        imageUrl: '',
        age: 0,
        calories: 620,
        hasChocolate: false,
        stars: 3,
      },
      {
        name: 'Apple Pie',
        imageUrl: '',
        age: 0,
        calories: 440,
        hasChocolate: false,
        stars: 2,
      },
      {
        name: 'Chocolate Lava Cake',
        imageUrl: '',
        age: 0,
        calories: 516,
        hasChocolate: true,
        stars: 4,
      },
    ];

    return { kittens, desserts };
  }
}
