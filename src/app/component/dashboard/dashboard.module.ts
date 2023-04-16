import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgChartjsModule } from 'ng-chartjs';
import { NgChartsModule } from 'ng2-charts';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CountriesMapModule } from 'countries-map';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MarcohernModule } from 'src/app/marcohern/marcohern.module';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardOneComponent } from './sales-dashboard/dashboard-one.component';
import { DashboardTwoComponent } from './marketing-dashboard/dashboard-two.component';
import { DashboardThreeComponent } from './app-dashboard/dashboard-three.component';
import { DashboardFourComponent } from './lms-dashboard/dashboard-four.component';
import { DashboardFiveComponent } from './analytics-dashboard/dashboard-five.component';


@NgModule({
  declarations: [
    DashboardOneComponent,
    DashboardTwoComponent,
    DashboardThreeComponent,
    DashboardFourComponent,
    DashboardFiveComponent,
  ],
  imports: [
    CommonModule,
    CountriesMapModule,
    DashboardRoutingModule,
    FormsModule,
    MarcohernModule,
    NgApexchartsModule,
    NgbModule,
    NgChartjsModule,
    NgChartsModule,
    NgxEchartsModule,
    ReactiveFormsModule,
    SharedModule,
    NgCircleProgressModule.forRoot(),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DashboardModule {}
