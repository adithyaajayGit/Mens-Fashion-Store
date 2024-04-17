import {  AfterViewInit, Component, ElementRef, ViewChild  } from '@angular/core';
import Chart from 'chart.js/auto';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-piechartreport',
  templateUrl: './piechartreport.component.html',
  styleUrls: ['./piechartreport.component.scss']
})
export class PiechartreportComponent {
  public categorydataarray: any[] = [];
  constructor(private db: DbserviceService) { }
  public chart!: any;

  @ViewChild('myChart') myChart!: ElementRef;

  ngAfterViewInit(): void {
    this.db.categorypie().then((data: any) => {
    this.categorydataarray = data;
    this.createChart();
    });
    }
    createChart() {
    const chartData = {
    labels: this.categorydataarray.map(item => item.category_name),
    datasets: [{
    // data: this.categorydataarray.map(item => item.someNumericProperty), 
    // replace with actual numeric property
    data: this.categorydataarray.map(item => item.total_bookings),
    backgroundColor: [
    'rgba(255, 99, 132, 0.7)',
    'rgba(54, 162, 235, 0.7)',
    'rgba(255, 206, 86, 0.7)',
    ],
    }],
    };
    this.chart = new Chart(this.myChart.nativeElement, {
    type: 'pie',
    data: chartData,
    options: { aspectRatio: 2.5 }
    });
    }
    }
