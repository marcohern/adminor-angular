import { Component, Input } from '@angular/core';

@Component({
  selector: 'marcohern-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent {
  @Input() public title:string = '*Title*';
  @Input() public transactions:any = [
    { who: 'Oscar Nommanee'      , amount: 45234, description: 'App Improvement', date: new Date('2020-01-12'), status: 'fa-level-up-alt text-success' , bg:'bg-danger-transparent' },
    { who: 'Wayde N. Thalabanz'  , amount: 23452, description: 'Milestone'      , date: new Date('2020-01-23'), status: 'fa-level-down-alt text-danger', bg:'bg-secondary-transparent' },
    { who: 'Dozeaplikayshun Wynn', amount: 78001, description: 'Sales Executive', date: new Date('2020-04-04'), status: 'fa-level-down-alt text-danger', bg:'bg-info-transparent' },
    { who: 'Polly Wannakrakouer' , amount: 37285, description: 'Milestone2'     , date: new Date('2020-04-04'), status: 'fa-level-up-alt text-success' , bg:'bg-success-transparent' },
    { who: 'Con Staninterupshuns', amount: 25341, description: 'App Improvement', date: new Date('2020-04-04'), status: 'fa-level-down-alt text-danger', bg:'bg-warning-transparent' },
  ];
}
