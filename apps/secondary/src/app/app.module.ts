import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TruckCardComponent } from './truck-card/truck-card.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MemoryApiService } from './utility/memory-api.service';
import { TrucksContainerComponent } from './trucks-container/trucks-container.component';

@NgModule({
  declarations: [AppComponent, TrucksContainerComponent, TruckCardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(MemoryApiService, {
      delay: 200,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
