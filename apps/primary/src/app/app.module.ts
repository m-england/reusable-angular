import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { CardLibModule } from '@libs/card-lib';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListContainerComponent } from './list-container/list-container.component';
import { MemoryApiService } from './utility/memory-api.service';

@NgModule({
  declarations: [AppComponent, ListContainerComponent],
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
