import { Component, OnInit } from '@angular/core';
import {PackageService} from '../../services/package.service';
import {ActivatedRoute} from '@angular/router';
import {PackageDetail} from '../../classes/package-detail';

@Component({
  selector: 'app-package-detail-view',
  templateUrl: './package-detail-view.component.html',
  styleUrls: ['./package-detail-view.component.css']
})
export class PackageDetailViewComponent implements OnInit {

  packageDetail: PackageDetail;

  editModeOn: boolean = false;

  constructor(private packageService: PackageService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.packageDetail = this.packageService.getPackageDetail(1000);
  }


}
