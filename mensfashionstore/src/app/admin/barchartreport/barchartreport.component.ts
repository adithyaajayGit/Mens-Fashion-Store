import {AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-barchartreport',
  templateUrl: './barchartreport.component.html',
  styleUrls: ['./barchartreport.component.scss']
})
export class BarchartreportComponent {


  public branddataarray: any[] = [];
  constructor(private db: DbserviceService) { }
  public chart!: any;

  @ViewChild('myChart') myChart!: ElementRef;

  ngAfterViewInit(): void {
    this.db.brandchart().then((data: any) => {
    this.branddataarray = data;
    this.createChart();
    });
    }
    createChart() {
    const chartData = {
    labels: this.branddataarray.map(item => item.brand_name),
    datasets: [{
    // data: this.categorydataarray.map(item => item.someNumericProperty), 
    // replace with actual numeric property
    data: this.branddataarray.map(item => item.product_count),
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
