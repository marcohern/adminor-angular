import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteRoutingModule } from './site-routing.module';
import { GeneralInfoPage } from './pages/general-info/general-info.page';
import { GeneralInfoForm } from './forms/general-info/general-info.form';

@NgModule({
  declarations: [
    GeneralInfoPage,
    GeneralInfoForm
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    SiteRoutingModule
  ]
})
export class SiteModule { }
