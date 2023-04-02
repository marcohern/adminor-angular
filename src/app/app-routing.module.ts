import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 import { LandingPageComponent } from './component/landing-page/landing-page/landing-page.component';
import { ContentLayoutComponent } from './shared/layout-components/layout/content-layout/content-layout.component';
import { ErrorLayoutComponent } from './shared/layout-components/layout/error-layout/error-layout.component';
import { SwitcherlayoutComponent } from './shared/layout-components/layout/switcherlayout/switcherlayout.component';
import { Content_Routes } from './shared/routes/error.routes';
import { landing_page_Routes } from './shared/routes/landingpage';
import { content } from './shared/routes/routes';
import { SwitcherOneRoute } from './shared/routes/switchers';
import { Error404Component } from './component/custom-pages/error404/error404.component';
import { LandingpageLayoutComponent } from './shared/layout-components/layout/landingpage-layout/landingpage-layout.component';

const routes: Routes = [
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  {
    path: '',
    loadChildren: () =>
      import('./authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      ),
  },
  {
    path: '',
    component: ContentLayoutComponent,
    children: content,
  },
  {
    path: '',
    component: ErrorLayoutComponent,
    children: Content_Routes,
  },
  {
    path: '',
    component: SwitcherlayoutComponent,
    children: SwitcherOneRoute,
  },
  {
    path: '',
    component: LandingpageLayoutComponent,
    children: landing_page_Routes,
  },
  {
    path: '',
    loadChildren: () =>
      import('./shared/shared.module').then((m) => m.SharedModule),
  },
  { path: '**', component: Error404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule ]
})
export class AppRoutingModule { }
