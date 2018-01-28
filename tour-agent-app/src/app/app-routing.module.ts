import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { CustomerSearchComponent } from './components/customer-search/customer-search.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PackageSummaryComponent } from './components/package-summary/package-summary.component';

const routes: Routes = [
  /* Specific static routes first, then general, then dynamic. */
  { path: 'home', component: HomeComponent },
  { path: 'customer-search', component: CustomerSearchComponent },
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
