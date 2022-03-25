import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Dessert } from '../models/dessert';
import { Kitten } from '../models/kitten';
import { DessertsService } from '../services/desserts.service';
import { KittensService } from '../services/kittens.service';

@Component({
  selector: 'app-list-container',
  templateUrl: './list-container.component.html',
  styleUrls: ['./list-container.component.scss'],
})
export class ListContainerComponent implements OnInit {
  public kitten$!: Observable<Kitten>;
  public dessert$!: Observable<Dessert>;

  constructor(
    private kittensService: KittensService,
    private dessertsService: DessertsService
  ) {}

  ngOnInit(): void {
    this.kitten$ = this.kittensService.retrieve().pipe(map(this.chooseOne));
    this.dessert$ = this.dessertsService.retrieve().pipe(map(this.chooseOne));
  }

  chooseOne<T>(items: T[]): T {
    return items[Math.floor(Math.random() * items.length)];
  }
}
