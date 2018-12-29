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

import { FormsModule } from '@angular/forms';
import { IncrementadorComponent } from './component/incrementador/incrementador.component';
import { GraficoDonaComponent } from './component/grafico-dona/grafico-dona.component';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    DashboardComponent,
    ProgresComponent,
    Graficas1Component,
    PagesComponent,
    IncrementadorComponent,
    GraficoDonaComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    PagesRouteModule,
    FormsModule,
    ChartsModule,
  ],
  exports: [
    DashboardComponent,
    ProgresComponent,
    Graficas1Component,
    PagesComponent,
  ]
})
export class PagesModuleModule { }
