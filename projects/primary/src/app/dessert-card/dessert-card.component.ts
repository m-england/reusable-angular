import { Component, Input, OnInit } from '@angular/core';
import { Dessert } from '../models/dessert';

@Component({
  selector: 'app-dessert-card',
  templateUrl: './dessert-card.component.html',
  styleUrls: ['./dessert-card.component.scss'],
})
export class DessertCardComponent implements OnInit {
  @Input() icon!: string;
  @Input() dessert!: Dessert;

  constructor() {}

  ngOnInit(): void {}
}
