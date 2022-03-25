import { Component, Input, OnInit } from '@angular/core';
import { Kitten } from '../models/kitten';

@Component({
  selector: 'app-card-one',
  templateUrl: './card-one.component.html',
  styleUrls: ['./card-one.component.scss']
})
export class CardOneComponent implements OnInit {

  @Input() icon!: string;
  @Input() kitten!: Kitten;

  constructor() { }

  ngOnInit(): void {
  }

}
