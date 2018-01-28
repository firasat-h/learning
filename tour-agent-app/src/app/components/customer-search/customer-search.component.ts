import { Component, OnInit } from '@angular/core';
import { CustomerSearchCriteria } from '../../classes/customer-search-criteria';
import { CustomerSearchService } from '../../services/customer-search.service';
import { Customer} from '../../classes/customer';

@Component({
  selector: 'app-customer-search',
  templateUrl: './customer-search.component.html',
  styleUrls: ['./customer-search.component.css']
})

export class CustomerSearchComponent implements OnInit {

  customers: Customer[];
  model = new CustomerSearchCriteria('','');

  constructor(private searchService: CustomerSearchService) {}

  ngOnInit() {
    // TODO: Remove this when we're done
    //get diagnostic() { return JSON.stringify(this.model); }

    this.customers = this.searchService.search();
  }

  search(): void {
    this.customers = this.searchService.search();
    console.log("About to search");
  }

}
