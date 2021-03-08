import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';

import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { PublicpageComponent } from './publicpage/publicpage.component';
import { RegistrationComponent } from './registration/registration.component';
import { AutoscrollComponent } from './autoscroll/autoscroll.component';
import { MappageComponent } from './mappage/mappage.component';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,

    MiscellaneousModule,
  ],
  declarations: [
    PagesComponent,
    PublicpageComponent,
    RegistrationComponent,
    AutoscrollComponent,
    MappageComponent,
  ],
})
export class PagesModule {
}
