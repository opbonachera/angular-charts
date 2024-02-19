import { Component, inject } from '@angular/core';
import { ViewChild } from '@angular/core';

import { Table } from 'primeng/table';
import { DataServiceService } from 'src/app/services/data-service.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})

export class TableComponent {
  @ViewChild('dt') dt: Table | undefined;
  
  public dataService = inject(DataServiceService);
  public data = this.dataService.getData;
  public cols = Object.keys(this.data[0]);
  public clear(table: Table){ table.clear() }

  applyFilterGlobal($event: any, stringVal: any) {
    this.dt!.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }

}
