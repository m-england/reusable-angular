import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CardLibModule } from '@libs/card-lib';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrucksContainerComponent } from './trucks-container/trucks-container.component';
import { MemoryApiService } from './utility/memory-api.service';

@NgModule({
  declarations: [AppComponent, TrucksContainerComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(MemoryApiService, {
      delay: 200,
    }),
    CardLibModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
