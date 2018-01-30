export class PackageSummary {

  createdBy: string;
  createdDate: string;

  constructor(
    public id: number,
    public type: string,
    public name: string,
    public description: string) {}

}
