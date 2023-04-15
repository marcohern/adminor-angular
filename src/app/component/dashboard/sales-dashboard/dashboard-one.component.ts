import { Component, ElementRef, ViewChild } from '@angular/core';
import * as chartData from 'src/app/marcohern/shared/data/sales-report';


@Component({
  selector: 'app-dashboard-one',
  templateUrl: './dashboard-one.component.html',
  styleUrls: ['./dashboard-one.component.scss'],
})
export class DashboardOneComponent {
  //Area Chart
  public AreaChartOptions = chartData.options;
  public AreaChartType = chartData.type;
  public AreaChartData = chartData.data;
}
