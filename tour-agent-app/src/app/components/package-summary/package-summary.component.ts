import { Component, OnInit } from '@angular/core';
import { PackageService } from '../../services/package.service';
import { PackageSummary } from '../../classes/package-summary';

@Component({
  selector: 'app-package-summary',
  templateUrl: './package-summary.component.html',
  styleUrls: ['./package-summary.component.css']
})
export class PackageSummaryComponent implements OnInit {

  packageSummaries: PackageSummary[];

  constructor(private packageService: PackageService) { }

  ngOnInit() {
    this.packageSummaries = this.packageService.getPackageSummaries();
  }

}
