import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-two',
  templateUrl: './card-two.component.html',
  styleUrls: ['./card-two.component.scss']
})
export class CardTwoComponent implements OnInit {

  // This approach could be re-usable but the inputs are
  // going to grow large and there will be a lot of 
  // display logic.

  @Input() imageUrl!: string;
  @Input() name!: string;
  @Input() age!: number;
  @Input() cuteness!: number;
  @Input() favoriteToy!: string;
  @Input() spayedOrNeutered!: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
