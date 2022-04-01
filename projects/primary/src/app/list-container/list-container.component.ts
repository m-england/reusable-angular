import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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
    this.kitten$ = this.kittensService.randomOne();
    this.dessert$ = this.dessertsService.randomOne();
  }

  onVote(chosen: Kitten | Dessert) {
    if ('cuteness' in chosen) {
      this.kittensService.vote(chosen);
      this.kitten$ = this.kittensService.randomOne();
    } else {
      this.dessertsService.vote(chosen);
      this.dessert$ = this.dessertsService.randomOne();
    }
  }
}
