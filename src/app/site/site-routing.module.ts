import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralInfoPage } from './pages/general-info/general-info.page';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'general', title: 'General Information', component: GeneralInfoPage, },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SiteRoutingModule {}