import { PackageSummary } from './package-summary';
import { RoomOption } from './room-option';
import { Itinerary } from './itinerary';

export class PackageDetail {

  summary: PackageSummary;
  roomOptions: RoomOption[] = [];
  itinerary: Itinerary;

  constructor() {}
}
