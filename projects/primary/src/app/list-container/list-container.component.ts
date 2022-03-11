import { Component, OnInit } from '@angular/core';
import { filter, Observable } from 'rxjs';
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
  public kittens$!: Observable<Kitten[]>;
  public desserts$!: Observable<Dessert[]>;

  constructor(
    private kittensService: KittensService,
    private dessertsService: DessertsService
  ) {}

  ngOnInit(): void {
    this.kittens$ = this.kittensService.retrieve();
    this.desserts$ = this.dessertsService.retrieve();
  }
}
