import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import Chart from 'chart.js/auto';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.scss']
})
export class AdminhomeComponent {
  public categorydataarray: any[] = [];
  public paymentdata: any[] = [];
  public categorydata: any[] = [];
  public branddata: any[] = [];
  public productdata: any[] = [];
  public bookingdata: any[] = [];

  


  public chart: any;

  constructor(private fb: FormBuilder, private db: DbserviceService, private router: Router) { }

  @ViewChild('myChart') myChart: ElementRef;

  ngAfterViewInit(): void {
    this.db.recenttrans().then((data: any) => {
      this.paymentdata = data;
    });

    this.db.categorybook().then((data: any) => {
      this.categorydata = data;
    });
    this.db.brandbook().then((data: any) => {
      this.branddata = data;
    });
    this.db.productbook().then((data: any) => {
      this.productdata = data;
    });
    this.db.monthbook().then((data: any) => {
      this.bookingdata = data;
    });

    this.db.categorypie().then((data: any) => {
      this.categorydataarray = data;
      this.createChart();
    });
  }

  createChart() {
    const chartData = {
      labels: this.categorydataarray.map(item => item.category_name),
      datasets: [{
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
