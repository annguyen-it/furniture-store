import { Route } from '@angular/router';
import { AdminLayoutComponent } from '@furniture-store/web/admin/ui/layout';

export const adminRoutes: Route[] = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: async () =>
          (await import('@furniture-store/web/admin/feature/dashboard'))
            .WebAdminFeatureDashboardModule,
      },
    ],
  },
];
