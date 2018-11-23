import { NgModule } from '@angular/core';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProgressComponent} from './progress/progress.component';
import {GraficComponent} from './grafic/grafic.component';
import {PagesComponent} from './pages.component';
import {SharedModule} from '../shared/shared.module';
import {PAGES_ROUTES} from './pages.routes';


@NgModule({
  imports: [SharedModule,PAGES_ROUTES],
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    GraficComponent,
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    GraficComponent,
  ],
  providers: []
})
export class PagesModule { }
