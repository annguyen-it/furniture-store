import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'fs-admin-side-bar',
  templateUrl: './admin-side-bar.component.html',
  styleUrls: ['./admin-side-bar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminSideBarComponent {
  /** PUBLIC PROPERTIES */
  public accountDropdownItems = [
    {
      title: 'Profile',
      icon: '<i class="mdi mdi-account-outline"></i>',
    },
    {
      title: 'Inbox',
      icon: '<i class="mdi mdi-email-outline"></i>',
    },
    {
      title: 'Settings',
      icon: '<i class="mdi mdi-cog-outline"></i>',
    },
  ];

  public navSections = [
    {
      name: 'E-Commerce',
      items: [
        {
          name: 'Dashboard',
          icon: '<i class="mdi mdi-cog-outline" style="font-size: 22px"></i>',
          url: '',
        },
        {
          name: 'Orders',
          icon: '<i class="mdi mdi-receipt-outline" style="font-size: 22px"></i>',
          subItem: [],
        },
        {
          name: 'Products',
          icon: '<i class="mdi mdi-truck-outline" style="font-size: 22px"></i>',
          subItem: [],
        },
        {
          name: 'Customers',
          icon: '<i class="mdi mdi-account-box-outline" style="font-size: 22px"></i>',
          url: 'customers',
        },
        {
          name: 'Invoice',
          icon: '<i class="mdi mdi-receipt-outline" style="font-size: 22px"></i>',
          subItem: [],
        },
      ],
    },
    {
      name: 'Pages',
      items: [
        {
          name: 'Settings',
          icon: '<i class="mdi mdi-cog-outline" style="font-size: 22px"></i>',
          url: 'customers',
        },
        {
          name: 'FAQ',
          icon: '<i class="mdi mdi-truck-outline" style="font-size: 22px"></i>',
          url: 'customers',
        },
        {
          name: 'Settings',
          icon: '<i class="mdi mdi-cog-outline" style="font-size: 22px"></i>',
          url: 'customers',
        },
        {
          name: 'FAQ',
          icon: '<i class="mdi mdi-truck-outline" style="font-size: 22px"></i>',
          url: 'customers',
        },
      ],
    },
  ];

  /** CONSTRUCTOR */
  constructor(private readonly router: Router) {}

  /** PUBLIC METHODS */
  public logout(): void {
    this.router.navigate(['sign-in']);
  }
}
