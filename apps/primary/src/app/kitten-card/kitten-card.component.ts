import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-kitten-card',
  templateUrl: './kitten-card.component.html',
  styleUrls: ['./kitten-card.component.scss'],
})
export class KittenCardComponent implements OnInit {
  @Input() name!: string;
  @Input() imageUrl!: string;
  @Input() age!: number;
  @Input() favoriteToy!: string;
  @Input() spayedOrNeutered!: boolean;
  @Input() cuteness!: 1 | 2 | 3 | 4 | 5;

  @Output() vote = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}
}
