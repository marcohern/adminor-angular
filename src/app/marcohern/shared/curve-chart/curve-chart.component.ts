import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { period, options, def } from '../data/sales-report';


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
  @Input() public data:any = def;
  @Input() public title:string = '*Title*';
  @Input() public description:string = '';
  @Input() public descLinkUrl:string = 'javascript:void(0)';
  @Input() public descLinkText:string = 'Learn More';

  public selected:string = '- select -';

  select(id:string) {
    var p = period[id];
    this.selected = p.label;
    this.data = p.data;
  }

}
