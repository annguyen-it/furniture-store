import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { adminRoutes } from './web-admin-feature-container.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(adminRoutes)],
})
export class WebAdminFeatureContainerModule {}
