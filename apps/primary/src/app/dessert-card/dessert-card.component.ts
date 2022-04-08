import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Dessert } from '../models/dessert';

@Component({
  selector: 'app-dessert-card',
  templateUrl: './dessert-card.component.html',
  styleUrls: ['./dessert-card.component.scss'],
})
export class DessertCardComponent implements OnInit {
  @Input() dessert!: Dessert;
  @Output() vote = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}
}
