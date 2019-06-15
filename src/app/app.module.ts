import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { BookControllerService, CatalogControllerService, ClientControllerService, ConnectionControllerService } from './shared/api/api';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PromotionControllerService } from './shared/api/promotionController.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ HttpClient,
    HttpClientModule,
    AppRoutingModule, BookControllerService, 
    CatalogControllerService, ClientControllerService,
    PromotionControllerService, ConnectionControllerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
