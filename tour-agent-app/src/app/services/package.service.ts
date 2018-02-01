import { Injectable } from '@angular/core';
import { PackageSummary } from '../classes/package-summary';
import {PackageDetail} from '../classes/package-detail';
import {RoomOption} from '../classes/room-option';
import {Itinerary} from '../classes/itinerary';
import * as Constants from '../classes/constants';

@Injectable()
export class PackageService {

  constructor() { }

  getPackageSummaries(): PackageSummary[] {
    let packageSummaries = [
      new PackageSummary(1000, "Hajj", "Package 1 Bronze", "Bronze package"),
      new PackageSummary(1001, "Hajj", "Package 2 Silver", "Silver package"),
      new PackageSummary(1002, "Hajj", "Package 3 Gold", "Gold package"),
      new PackageSummary(1003, "Hajj", "Package 4 Platinum", "Platinum package")
    ];
    return packageSummaries;
  }

  getPackageDetail(id: number): PackageDetail {
    let packageSummary: PackageSummary =
      new PackageSummary(1000, "Hajj", "Package 1 Bronze", "Bronze package");
    packageSummary.createdBy = "fhussain";
    packageSummary.createdDate = "1/1/2018";

    let roomOption1 = new RoomOption();
    roomOption1.roomType = Constants.DOUBLE_OCCUP;
    roomOption1.perPersonPrice = "12000.00";
    roomOption1.configured = true;

    let roomOption2 = new RoomOption();
    roomOption2.roomType = Constants.TRIPLE_OCCUP;
    roomOption2.perPersonPrice = "10700.00";
    roomOption2.configured = true;

    let roomOption3 = new RoomOption();
    roomOption3.roomType = Constants.QUAD_OCCUP;
    roomOption3.perPersonPrice = "9000.00";
    roomOption3.configured = true;

    let itinerary = new Itinerary();
    itinerary.startDate = "8/1/2018";
    itinerary.endDate = "8/21/2018";

    let packageDetail = new PackageDetail();
    packageDetail.summary = packageSummary;
    packageDetail.roomOptions = [roomOption1, roomOption2, roomOption3];
    packageDetail.itinerary = itinerary;

    return packageDetail;
  }

}
