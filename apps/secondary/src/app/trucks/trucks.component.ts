import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Truck } from '../models/truck';
import { TrucksService } from '../services/trucks.service';

@Component({
  selector: 'app-trucks',
  templateUrl: './trucks.component.html',
  styleUrls: ['./trucks.component.scss'],
})
export class TrucksComponent implements OnInit {
  trucks$!: Observable<Truck>;

  constructor(private trucksService: TrucksService) {}

  ngOnInit(): void {
    this.trucks$ = this.trucksService.randomOne();
  }

  onNextTruck() {
    this.trucks$ = this.trucksService.randomOne();
  }
}
