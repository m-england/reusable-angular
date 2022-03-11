import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListContainerComponent } from './list-container/list-container.component';

const routes: Routes = [{ path: '', component: ListContainerComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
