import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonCardTwoComponent } from './common-card-two/common-card-two.component';
import { ListContainerComponent } from './list-container/list-container.component';
import { MemoryApiService } from './utility/memory-api.service';

@NgModule({
  declarations: [AppComponent, ListContainerComponent, CommonCardTwoComponent],
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
