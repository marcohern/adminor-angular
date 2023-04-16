import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarcohernRoutingModule } from './marcohern-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { Counter1Component } from './shared/counters/counter1/counter1.component';
import { Counter2Component } from './shared/counters/counter2/counter2.component';
import { CurveChartComponent } from './shared/curve-chart/curve-chart.component';
import { InvoicesComponent } from './shared/invoices/invoices.component';
import { MyProfileComponent } from './users/my-profile/my-profile.component';
import { QueryUsersComponent } from './users/query-users/query-users.component';
import { SalesSummaryComponent } from './shared/sales-summary/sales-summary.component';
import { TasksAssignedComponent } from './shared/tasks-assigned/tasks-assigned.component';
import { TasksComponent } from './shared/tasks/tasks.component';
import { TransactionsComponent } from './shared/transactions/transactions.component';
import { UpdatePasswordComponent } from './users/update-password/update-password.component';
import { UpdateEmailComponent } from './users/update-email/update-email.component';
import { WeatherComponent } from './shared/weather/weather.component';



@NgModule({
  declarations: [
    CurveChartComponent,
    Counter1Component,
    Counter2Component,
    InvoicesComponent,
    MyProfileComponent,
    QueryUsersComponent,
    SalesSummaryComponent,
    TasksAssignedComponent,
    TasksComponent,
    TransactionsComponent,
    UpdatePasswordComponent,
    UpdateEmailComponent,
    WeatherComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NgSelectModule,
    MarcohernRoutingModule,
    NgChartsModule,
    NgbModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports:[
    Counter1Component,
    Counter2Component,
    CurveChartComponent,
    TasksComponent,
    SalesSummaryComponent,
    TasksAssignedComponent,
    TransactionsComponent,
    WeatherComponent,
    InvoicesComponent
  ],
})
export class MarcohernModule { }
