import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderMobileComponent } from './header-mobile/header-mobile.component';
import { NopagefoundComponent } from '../404/nopagefound.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    HeaderMobileComponent,
    NopagefoundComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    HeaderMobileComponent,
    NopagefoundComponent,
  ]

})
export class SharedModule { }
