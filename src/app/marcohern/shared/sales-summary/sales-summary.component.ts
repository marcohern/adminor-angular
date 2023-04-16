import { Component, Input } from '@angular/core';

@Component({
  selector: 'marcohern-sales-summary',
  templateUrl: './sales-summary.component.html',
  styleUrls: ['./sales-summary.component.scss']
})
export class SalesSummaryComponent {
  @Input() public title:string = "*Title*";
  @Input() public aggregates:any = [
    { title: 'Total Revenue'    , description: 'weekly profit'  , background:'bg-primary', textcolor:'text-primary', icon: 'bx-bar-chart-alt'    , amount:15300, delta: 75, direction: 'increased' },
    { title: 'Total Tax'        , description: 'weekly profit'  , background:'bg-success', textcolor:'text-success', icon: 'bx-wallet-alt'       , amount:17300, delta: 62, direction: 'increased' },
    { title: 'Total Income'     , description: 'weekly profit'  , background:'bg-info'   , textcolor:'text-info'   , icon: 'bx-money'            , amount:14300, delta: 55, direction: 'increased' },
    { title: 'Total Expenses'   , description: 'weekly profit'  , background:'bg-warning', textcolor:'text-warning', icon: 'bxs-hourglass-bottom', amount:43300, delta: 25, direction: 'increased' },
    { title: 'Customer visitors', description: 'weekly visitors', background:'bg-danger' , textcolor:'text-danger' , icon: 'bx-happy-heart-eyes' , amount:73300, delta: 45, direction: 'increased' }
  ];
}
