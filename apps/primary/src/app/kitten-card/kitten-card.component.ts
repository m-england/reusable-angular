import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Kitten } from '../models/kitten';

@Component({
  selector: 'app-kitten-card',
  templateUrl: './kitten-card.component.html',
  styleUrls: ['./kitten-card.component.scss'],
})
export class KittenCardComponent implements OnInit {
  @Input() icon!: string;
  @Input() kitten!: Kitten;
  @Output() vote = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}
}
