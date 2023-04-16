import { Component, Input } from '@angular/core';

@Component({
  selector: 'marcohern-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.scss']
})
export class InvoicesComponent {
  @Input() public title:string = '*Title*';
  @Input() public invoices:any = [
    { uid:'00100001', who:'Jean Powell' , email:'JeanPowell@mail.com' , date:new Date('2022-08-12'), status:'paid', amount: 450870 },
    { uid:'00100002', who:'Gavin Gibson', email:'GavinGibson@mail.com', date:new Date('2022-08-10'), status:'failed', amount: 230540 },
    { uid:'00100003', who:'Junior Sam'  , email:'JuniorSam@mail.com'  , date:new Date('2022-08-07'), status:'pending', amount: 43198  },
    { uid:'00100004', who:'Gabiel'      , email:'Gabriel@mail.com'    , date:new Date('2022-08-05'), status:'paid', amount: 230540 },
    { uid:'00100005', who:'Zach Efron'  , email:'ZachEfron@mail.com'  , date:new Date('2022-08-04'), status:'paid', amount: 55300  },
    { uid:'00100006', who:'Mona Matty'  , email:'MonaMatty@mail.com'  , date:new Date('2022-08-02'), status:'pending', amount: 234100 },
    { uid:'00100007', who:'Samantha May', email:'SamanthaMay@mail.com', date:new Date('2022-07-29'), status:'failed', amount: 43198  },
  ];
}
