import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 *  Rutas
 */
import { AppRoutingModule } from '../app-routing.module';
import { PagesRouteModule } from './pages-route.module';
/**
 *  imports Module
 */
import { SharedModule } from '../shared/shared.module';


import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgresComponent } from './progres/progres.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';




@NgModule({
  declarations: [
    DashboardComponent,
    ProgresComponent,
    Graficas1Component,
    PagesComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    PagesRouteModule
  ],
  exports: [
    DashboardComponent,
    ProgresComponent,
    Graficas1Component,
    PagesComponent,
  ]
})
export class PagesModuleModule { }
