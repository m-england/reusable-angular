import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
} from '@angular/core';

@Component({
  selector: 'app-common-card-two',
  templateUrl: './common-card-two.component.html',
  styleUrls: ['./common-card-two.component.scss'],
})
export class CommonCardTwoComponent implements OnInit {
  @Input() name!: string;
  @Input() imageUrl!: string;
  @Input() footerTemplate?: TemplateRef<any>;

  @Output() vote = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}
}
