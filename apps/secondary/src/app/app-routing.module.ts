import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrucksContainerComponent } from './trucks-container/trucks-container.component';

const routes: Routes = [{ path: '', component: TrucksContainerComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
