import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Truck } from '../models/truck';

@Component({
  selector: 'app-truck-card',
  templateUrl: './truck-card.component.html',
  styleUrls: ['./truck-card.component.scss'],
})
export class TruckCardComponent implements OnInit {
  @Input() truck!: Truck;

  @Output() nextTruck = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}
}
