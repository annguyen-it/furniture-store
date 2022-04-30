import { Route } from '@angular/router';
import { LayoutComponent } from '@furniture-store/web/shell/ui/layout';

export const webShellRoutes: Route[] = [
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
