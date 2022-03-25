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
        imageUrl: './assets/cute-kitten-1.jpg',
        cuteness: 3,
      },
      {
        name: 'Spot',
        age: 3,
        favoriteToy: 'cardboard box',
        spayedOrNeutered: false,
        imageUrl: './assets/cute-kitten-2.jpg',
        cuteness: 2,
      },
      {
        name: 'Mittens',
        age: 50,
        favoriteToy: 'the couch',
        spayedOrNeutered: true,
        imageUrl: './assets/cute-kitten-3.jpg',
        cuteness: 5,
      },
      {
        name: "d'Artagnan",
        age: 50,
        favoriteToy: 'hands',
        spayedOrNeutered: true,
        imageUrl: './assets/cute-kitten-4.jpg',
        cuteness: 4,
      },
      {
        name: 'Cheddar',
        age: 50,
        favoriteToy: 'aquarium',
        spayedOrNeutered: true,
        imageUrl: './assets/cute-kitten-5.jpg',
        cuteness: 4,
      },
      {
        name: 'Ham Hock',
        age: 50,
        favoriteToy: 'live rodents',
        spayedOrNeutered: false,
        imageUrl: './assets/cute-kitten-6.jpg',
        cuteness: 5,
      },
      {
        name: 'The General',
        age: 50,
        favoriteToy: 'hair ties',
        spayedOrNeutered: true,
        imageUrl: './assets/cute-kitten-7.jpg',
        cuteness: 3,
      },
    ];

    const desserts: Dessert[] = [
      {
        name: 'Chocolate Lava Cake',
        imageUrl: './assets/choco-lava.jpg',
        age: 0,
        calories: 516,
        hasChocolate: true,
        stars: 4,
      },
      {
        name: 'Creme Brulee',
        imageUrl: './assets/creme-brulee.jpg',
        age: 0,
        calories: 620,
        hasChocolate: false,
        stars: 3,
      },
      {
        name: 'Apple Pie',
        imageUrl: './assets/apple-pie.jpg',
        age: 0,
        calories: 440,
        hasChocolate: false,
        stars: 2,
      },
    ];

    return { kittens, desserts };
  }
}
