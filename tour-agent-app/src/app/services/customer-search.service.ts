import { Injectable } from '@angular/core';
import { Customer } from '../classes/customer';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class CustomerSearchService {
  customers: Customer[];

  constructor() { }

  search () {
    this.customers = [
      {"firstName":"Firasat", "lastName":"Hussain", "city":"Chicago"},
      {"firstName":"Safina", "lastName":"Ghazi", "city":"Chicago"},
    ];
    return this.customers;
  }

}
