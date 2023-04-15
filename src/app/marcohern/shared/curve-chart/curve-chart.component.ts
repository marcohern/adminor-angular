import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { period, yearly, monthly, daily, options } from '../data/sales-report';


@Component({
  selector: 'marcohern-curve-chart',
  templateUrl: './curve-chart.component.html',
  styleUrls: ['./curve-chart.component.scss']
})
export class CurveChartComponent {
  @ViewChild('Canvas') Canvas: ElementRef | any;
  @ViewChild('myCanvas') myCanvas: ElementRef | any;

  @Input() public options:any = options;
  @Input() public type:any = 'line';
  @Input() public data:any = [];
  @Input() public title:string = '*Title*';
  @Input() public description:string = '';
  @Input() public descLinkUrl:string = 'javascript:void(0)';
  @Input() public descLinkText:string = 'Learn More';

  public selected:string = '';

  select(id:string) {
    var p = period[id];
    this.selected = p.label;
    this.data = p.data;
  }

  ngOnInit() {
    this.select('daily')
  }
}
