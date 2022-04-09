import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Truck } from '../models/truck';
import { TrucksService } from '../services/trucks.service';

@Component({
  selector: 'app-trucks',
  templateUrl: './trucks-container.component.html',
  styleUrls: ['./trucks-container.component.scss'],
})
export class TrucksContainerComponent implements OnInit {
  trucks$!: Observable<Truck>;

  constructor(private trucksService: TrucksService) {}

  ngOnInit(): void {
    this.trucks$ = this.trucksService.randomOne();
  }

  onNextTruck() {
    this.trucks$ = this.trucksService.randomOne();
  }
}
