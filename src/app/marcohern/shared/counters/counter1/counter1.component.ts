import { Component, Input } from '@angular/core';

export class Delta {
  status:string = '';
  value:number = 0;
  date:Date = new Date();
}

@Component({
  selector: 'marcohern-counter1',
  templateUrl: './counter1.component.html',
  styleUrls: ['./counter1.component.scss']
})
export class Counter1Component {
  @Input() title:string = "*Title*";
  @Input() icon:string = "user";
  @Input() amount:number = 0;
  @Input() background:string = "bg-info";
  @Input() delta:number = 0;
  @Input() deltaDate:string = "2023-04-15T15:06:00";
  deltaRelativeDate:string = '';

  dt:Delta = {
    status: 'bg-success-transparent tx-success',
    value: 65,
    date: new Date()
  };

  ngOnInit() {
    this.dt.value = Math.abs(this.delta);
    if (this.delta < 0) this.dt.status = 'bg-secondary-transparent tx-secondary';
    this.dt.date = new Date(this.deltaDate)
    this.deltaRelativeDate = this.calculateDeltaRelativeDate();
  }

  private calculateDeltaRelativeDate() {
    var now = new Date();
    var diff = (now.getTime() - this.dt.date.getTime())/1000;
    console.log(this.title,  diff);
    if (diff < 60) return "just now";
    if (diff < 120) return "1 minute ago";
    if (diff < 3600) return `${Math.round(diff/60)} minutes ago`;
    if (diff < 7200) return `1 hour ago`;
    if (diff < 86400) return `${Math.round(diff/3600)} hours ago`;
    if (diff < 172800) return `1 day ago`;
    if (diff < 604800) return `${Math.round(diff/86400)} days ago`;
    if (diff < 1209600) return `1 week ago`;
    if (diff < 2592000) return `${Math.round(diff/604800)} weeks ago`;
    return '';
  }
}
