import { Component, Input } from '@angular/core';

@Component({
  selector: 'marcohern-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent {
  @Input() public title:string = '*Title*';
  @Input() public tasks:any = [
    { title: 'One'  , progress: 10, bg:'bg-flat-primary' },
    { title: 'Two'  , progress: 20, bg:'bg-flat-secondary' },
    { title: 'Three', progress: 30, bg:'bg-flat-info' },
    { title: 'Four' , progress: 40, bg:'bg-flat-warning' },
    { title: 'Five' , progress: 50, bg:'bg-flat-danger' },
  ];
  
}
