import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import {CustomerSummaryComponent} from './customer-search/customer-search.component';
import {CustomerEditComponent} from './customer-edit/customer-edit.component';

const routes: Routes = [
  /* Static routes first, then general, then dynamic. */
  { path: 'home', component: HomeComponent },
  { path: 'customer-search', component: CustomerSummaryComponent },
  { path: 'customer-edit', component: CustomerEditComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' }
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
