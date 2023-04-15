import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QueryUsersComponent } from './users/query-users/query-users.component';
import { MyProfileComponent } from './users/my-profile/my-profile.component';
import { UpdatePasswordComponent } from './users/update-password/update-password.component';
import { UpdateEmailComponent } from './users/update-email/update-email.component';
import { MarcohernRoutingModule } from './marcohern-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';
import { NgChartjsModule } from 'ng-chartjs';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgSelectModule } from '@ng-select/ng-select';
import { CounterComponent } from './shared/counter/counter.component';
import { CurveChartComponent } from './shared/curve-chart/curve-chart.component';



@NgModule({
  declarations: [
    QueryUsersComponent,
    MyProfileComponent,
    UpdatePasswordComponent,
    UpdateEmailComponent,
    CounterComponent,
    CurveChartComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NgSelectModule,
    MarcohernRoutingModule,
    NgChartjsModule,
    NgChartsModule,
    NgxEchartsModule,
    NgApexchartsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports:[
    CounterComponent,
    CurveChartComponent
  ],
})
export class MarcohernModule { }
