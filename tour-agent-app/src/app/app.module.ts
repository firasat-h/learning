import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { CustomerSearchComponent } from './components/customer-search/customer-search.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CustomerSearchResultsComponent } from './components/customer-search-results/customer-search-results.component';

import { CustomerSearchService } from './services/customer-search.service';
import { PackageSummaryComponent } from './components/package-summary/package-summary.component';
import { PackageService } from './services/package.service';
import { PackageDetailViewComponent } from './components/package-detail-view/package-detail-view.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CustomerSearchComponent,
    NotFoundComponent,
    CustomerSearchResultsComponent,
    PackageSummaryComponent,
    PackageDetailViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    CustomerSearchService,
    PackageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
