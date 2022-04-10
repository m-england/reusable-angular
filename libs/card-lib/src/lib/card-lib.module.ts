import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CommonCardTwoComponent } from './common-card-two/common-card-two.component';

@NgModule({
  declarations: [CommonCardTwoComponent],
  imports: [CommonModule],
  exports: [CommonCardTwoComponent],
})
export class CardLibModule {}
