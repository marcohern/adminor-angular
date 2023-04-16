import { Component, Input } from '@angular/core';

@Component({
  selector: 'marcohern-counter2',
  templateUrl: './counter2.component.html',
  styleUrls: ['./counter2.component.scss']
})
export class Counter2Component {
  @Input() public bg:string = 'bg-primary shadow-primary';
  @Input() public status:string = 'bg-success-transparent tx-success';
  @Input() public icon:string = 'bx-user';
  @Input() public title:string = '*Title*';
  @Input() public amount:number = 0;
  @Input() public date:Date = new Date('2023-04-16T11:30');
}
