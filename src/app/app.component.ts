import { Component } from '@angular/core';
import { ColDef, GridOptions } from 'ag-grid-community';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  columnDefs: ColDef[] = [
    { headerName: 'Nom', field: 'name' },
    { headerName: 'Liste', field: 'list' },
    {
      headerName: 'Unité',
      field: 'unit',
      editable: params => {
        return params.data.list === 'Off';
      }
    },
    { headerName: 'Liste de choix', field: 'choiceList' }
  ];

  rowData = [
    {
      name: 'NB Logement vendu',
      list: 'Off',
      unit: 'U',
      choiceList: null
    },
    {
      name: 'Zone',
      list: 'On',
      unit: null,
      choiceList: ['senegal', 'brest'].join('; ')
    },
    {
      name: 'Taux d occupation',
      list: 'Off',
      unit: '%',
      choiceList: null
    },
    { name: 'birame', list: 'Off', unit: 'O', choiceList: null }
  ];

  gridOptions: GridOptions = {
    columnDefs: this.columnDefs,
    rowData: this.rowData,
    singleClickEdit: true,
    defaultColDef: {
      editable: true
    }
  };
}
