import { Component, OnInit, inject } from '@angular/core';
import { eventData } from 'src/app/data/chart';
import { empresaData } from 'src/app/data/chart';
import { perfilData } from 'src/app/data/chart';
import { modalidadData } from 'src/app/data/chart';
import { planData } from 'src/app/data/chart';
import { frecuenciaData } from 'src/app/data/chart';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.css'
})

export class ChartsComponent implements OnInit{
  public dataService = inject(DataServiceService);

  basicData: any;
  modalidadData: any;
  eventData: any;
  basicOptions: any;
  paisData: any;
  planData:any; 
  frecuenciaData:any;
  perfilData:any;
  empresaData: any;

  constructor(){
    this.eventData = this.dataService.getEventoData;
    this.modalidadData = this.dataService.getModalidadData;
    this.paisData = this.dataService.getPaisData;
    this.planData = this.dataService.getPlanData;
    this.frecuenciaData = this.dataService.getFrecuenciaData;
    this.empresaData = this.dataService.getEmpresaData;
    this.perfilData = this.dataService.getPerfilData;
  }

  ngOnInit() {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');
      const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
      const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.eventData = {
          labels: this.eventData.labels,
          datasets: [
              {
                  label: 'Eventos',
                  data: this.eventData.counts,
                  backgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)'],
                  borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)'],
                  borderWidth: 1
              }
          ]
      };

    this.modalidadData = {
        labels: this.modalidadData.labels,
        datasets: [
            {
                label: 'Modalidad',
                data: this.modalidadData.counts,
                backgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)'],
                borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)'],
                borderWidth: 1
            }
        ]
    };

    this.planData = {
        labels: this.planData.labels,
        datasets: [
            {
                label: 'Plan',
                data: this.planData.counts,
                backgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)'],
                borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)'],
                borderWidth: 1
            }
        ]
    };

    this.paisData = {
        labels: this.paisData.labels,
        datasets: [
            {
                label: 'País',
                data: this.paisData.counts,
                backgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)'],
                borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)'],
                borderWidth: 1
            }
        ]
    };

    this.frecuenciaData = {
        labels: this.frecuenciaData.labels,
        datasets: [
            {
                label: 'Frecuencia',
                data: this.frecuenciaData.counts,
                backgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)'],
                borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)'],
                borderWidth: 1
            }
        ]
    };

    this.empresaData = {
        labels: this.empresaData.labels,
        datasets: [
            {
                label: 'Empresa',
                data: this.empresaData.counts,
                backgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)'],
                borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)'],
                borderWidth: 1
            }
        ]
    };

    this.perfilData = {
        labels: this.perfilData.labels,
        datasets: [
            {
                label: 'Perfil',
                data: this.perfilData.counts,
                backgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)'],
                borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)'],
                borderWidth: 1
            }
        ]
    };

    this.basicOptions = {
          indexAxis:'y',
          plugins: {
              legend: {
                  labels: {
                      color: textColor
                  }
              }
          },
          scales: {
              y: {
                  beginAtZero: true,
                  ticks: {
                      color: textColorSecondary
                  },
                  grid: {
                      color: surfaceBorder,
                      drawBorder: false
                  }
              },
              x: {
                  ticks: {
                      color: textColorSecondary
                  },
                  grid: {
                      color: surfaceBorder,
                      drawBorder: false
                  }
              }
          }
      };
  }
}
