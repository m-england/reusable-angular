import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { Truck } from '../models/truck';

@Injectable({
  providedIn: 'root',
})
export class MemoryApiService implements InMemoryDbService {
  createDb(): {} | Observable<{}> | Promise<{}> {
    const trucks: Truck[] = [
      {
        name: 'Bigfoot',
        age: 13,
        imageUrl: './assets/bigfoot.jpg',
        averageEventScore: 91.3,
        receivedHighFiveFromDrive: false,
        timesSeen: 6,
      },
      {
        name: 'Bulldozer',
        age: 7,
        imageUrl: './assets/bulldozer.jpg',
        averageEventScore: 80.7,
        receivedHighFiveFromDrive: true,
        timesSeen: 4,
      },
      {
        name: 'El Toro Loco',
        age: 2,
        imageUrl: './assets/el-toro-loco.jpg',
        averageEventScore: 90.1,
        receivedHighFiveFromDrive: true,
        timesSeen: 2,
      },
      {
        name: 'Grave Digger',
        age: 9,
        imageUrl: './assets/grave-digger.jpg',
        averageEventScore: 84.2,
        receivedHighFiveFromDrive: true,
        timesSeen: 41,
      },
      {
        name: 'Monster Mutt',
        age: 6,
        imageUrl: './assets/monster-mutt.jpg',
        averageEventScore: 88.5,
        receivedHighFiveFromDrive: false,
        timesSeen: 2,
      },
      {
        name: 'Shattered',
        age: 1,
        imageUrl: './assets/shattered.jpg',
        averageEventScore: 93.1,
        receivedHighFiveFromDrive: true,
        timesSeen: 1,
      },
      {
        name: 'Wild Thang',
        age: 4,
        imageUrl: './assets/wild-thang.jpg',
        averageEventScore: 79.0,
        receivedHighFiveFromDrive: false,
        timesSeen: 3,
      },
    ];

    return { trucks };
  }
}
