import { Routes } from "@angular/router";

export const content: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('src/app/component/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: 'advanced-ui',
    loadChildren: () =>
      import('src/app/component/advance-ui/advance-ui.module').then(
        (m) => m.AdvanceUiModule
      ),
  },
  {
    path: 'elements',
    loadChildren: () =>
      import('src/app/component/elements/elements.module').then(
        (m) => m.ElementsModule
      ),
  },
  {
    path: 'apps',
    loadChildren: () =>
      import('src/app/component/apps/apps.module').then((m) => m.AppsModule),
  },
  {
    path: 'forms',
    loadChildren: () =>
      import('src/app/component/forms/forms.module').then((m) => m.FormModule),
  },
  {
    path: 'charts',
    loadChildren: () =>
      import('src/app/component/charts/charts.module').then(
        (m) => m.ChartsModule
      ),
  },
  {
    path: 'pages',
    loadChildren: () =>
      import('src/app/component/pages/pages.module').then((m) => m.PagesModule),
  },
  {
    path: 'icons',
    loadChildren: () =>
      import('src/app/component/icons/icons.module').then((m) => m.IconsModule),
  },
  {
    path: 'ecommerce',
    loadChildren: () =>
      import('src/app/component/ecommerce/ecommerce.module').then(
        (m) => m.EcommerceModule
      ),
  },
  {
    path: 'utilities',
    loadChildren: () =>
      import('src/app/component/utilities/utilities.module').then(
        (m) => m.UtilitiesModule
      ),
  },
];