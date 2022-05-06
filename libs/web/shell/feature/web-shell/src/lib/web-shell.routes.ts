import { Route } from '@angular/router';
import { LayoutComponent } from '@furniture-store/web/shell/ui/layout';

export const webShellRoutes: Route[] = [
  {
    path: 'sign-in',
    loadChildren: async () =>
      (await import('@furniture-store/web/sign-in/feature')).SignInModule,
  },
  {
    path: 'sign-up',
    loadChildren: async () =>
      (await import('@furniture-store/web/sign-up/feature')).SignUpModule,
  },
  {
    path: 'admin',
    children: [
      {
        path: '',
        loadChildren: async () =>
          (await import('@furniture-store/web/admin/feature/container'))
            .WebAdminFeatureContainerModule,
      },
    ],
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: async () =>
          (await import('@furniture-store/web/home/feature')).HomeModule,
      },
    ],
  },
];
