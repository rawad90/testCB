import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SelecProtocolsComponent } from './selec-protocols/selec-protocols.component';
import { FormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { DeviceGroupComponent } from './device-group/device-group.component';
import { SummaryComponent } from './summary/summary.component';
import { TimePeriodComponent } from './time-period/time-period.component';

@NgModule({
  declarations: [
    AppComponent,
    SelecProtocolsComponent,
    DeviceGroupComponent,
    SummaryComponent,
    TimePeriodComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatCheckboxModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
