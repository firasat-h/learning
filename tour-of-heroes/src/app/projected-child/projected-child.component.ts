import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projected-child',
  templateUrl: './projected-child.component.html',
  styleUrls: ['./projected-child.component.css'],
  template: `
    <div>-- projected child begins</div>
    <ng-content></ng-content>
    <div>-- projected child ends</div>`

})
export class ProjectedChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
