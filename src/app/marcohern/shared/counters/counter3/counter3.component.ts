import { Component, Input } from '@angular/core';

@Component({
  selector: 'marcohern-counter3',
  templateUrl: './counter3.component.html',
  styleUrls: ['./counter3.component.scss']
})
export class Counter3Component {
  @Input() public title:string = '*Title*';
  @Input() public percent:number = 0;
  @Input() public percentChange:number = 0;
  @Input() public amount:number = 0;
  @Input() public bg:string = 'bg-primary-gradient shadow-primary';
  @Input() public stroke:string = '';
  
}
