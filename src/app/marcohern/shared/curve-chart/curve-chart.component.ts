import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'marcohern-curve-chart',
  templateUrl: './curve-chart.component.html',
  styleUrls: ['./curve-chart.component.scss']
})
export class CurveChartComponent {
  @ViewChild('Canvas') Canvas: ElementRef | any;
  @ViewChild('myCanvas') myCanvas: ElementRef | any;

  @Input() public options:any;
  @Input() public type:any;
  @Input() public data:any;
  @Input() public title:string = '*Title*';
  @Input() public description:string = '';
  @Input() public descLinkUrl:string = 'javascript:void(0)';
  @Input() public descLinkText:string = 'Learn More';
}
