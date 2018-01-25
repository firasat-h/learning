import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { CustomerSummaryComponent } from './customer-search/customer-search.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CustomerSummaryComponent,
    CustomerEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
