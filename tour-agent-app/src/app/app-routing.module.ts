import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { CustomerSearchComponent } from './components/customer-search/customer-search.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PackageSummaryComponent } from './components/package-summary/package-summary.component';
import {PackageDetailViewComponent} from './components/package-detail-view/package-detail-view.component';

const routes: Routes = [
  /* Specific static routes first, then general, then dynamic. */
  { path: 'home', component: HomeComponent },
  { path: 'customer-search', component: CustomerSearchComponent },
  { path: 'package/:id', component: PackageDetailViewComponent },
  { path: 'packages', component: PackageSummaryComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' },

  { path: '**', component: NotFoundComponent }
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: []
})

export class AppRoutingModule { }
