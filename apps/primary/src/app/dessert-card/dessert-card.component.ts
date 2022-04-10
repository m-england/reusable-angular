import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dessert-card',
  templateUrl: './dessert-card.component.html',
  styleUrls: ['./dessert-card.component.scss'],
})
export class DessertCardComponent implements OnInit {
  @Input() name!: string;
  @Input() imageUrl!: string;
  @Input() age!: number;
  @Input() calories!: number;
  @Input() hasChocolate!: boolean;
  @Input() stars!: 1 | 2 | 3 | 4;

  @Output() vote = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}
}
