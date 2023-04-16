import { Component, Input } from '@angular/core';

@Component({
  selector: 'marcohern-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent {
  @Input() public title:string = '*Title*';
  @Input() public temp:number = 0;
  @Input() public description:string = '*Description*';
  @Input() public conditions:any = [
    { title:'Sunny', temp:28, icon:'fe-sun' },
    { title:'Wind', temp:73, icon:'fe-cloud' },
    { title:'Rain', temp:32, icon:'fe-cloud-rain' },
  ];
}
