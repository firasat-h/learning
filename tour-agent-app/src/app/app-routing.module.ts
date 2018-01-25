import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import {CustomerSearchComponent} from './customer-search/customer-search.component';
import {CustomerEditComponent} from './customer-edit/customer-edit.component';

const routes: Routes = [
  /* Specific static routes first, then general, then dynamic. */
  { path: 'customer-edit', component: CustomerEditComponent },
  { path: 'home', component: HomeComponent },
  { path: 'customer-search', component: CustomerSearchComponent },

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
