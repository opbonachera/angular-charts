import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Table, TableModule } from 'primeng/table'
import { ChartsComponent } from './components/charts/charts.component';
import { TableComponent } from './components/table/table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartModule } from 'primeng/chart';

@NgModule({
  declarations: [
    AppComponent,
    ChartsComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
