import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TableComponent } from './components/table/table.component';
import { ChartsComponent } from './components/charts/charts.component';

const routes: Routes = [
  { path: 'chart', component: ChartsComponent },
  { path: 'table', component: TableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
