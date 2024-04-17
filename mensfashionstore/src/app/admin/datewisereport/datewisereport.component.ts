import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

export function DateNotPastValidator(control: AbstractControl): { [key: string]: boolean } | null {
  const selectedDate = new Date(control.value);
  const currentDate = new Date();

  if (selectedDate > currentDate) {
    return { 'invalidDate': true };
  }

  return null;
}


@Component({
  selector: 'app-datewisereport',
  templateUrl: './datewisereport.component.html',
  styleUrls: ['./datewisereport.component.scss']
})
export class DatewisereportComponent implements OnInit {
  reportdetails: any;
  todayDate:string;

  constructor(private fb: FormBuilder, private router: Router, private db: DbserviceService) {
    this.todayDate = this.getTodayDate();
  } 
 

  getTodayDate(): string {
    const today = new Date();
    return today.toISOString().split('T')[0];
  }
  maxStartDate(): string {
    return this.todayDate;
  }

  ngOnInit(): void {
  }
  reportformgroup = this.fb.group({
    startdate: [''],
    enddate: ['']
  })
  OnSubmit() {
    const startDate = new Date(this.reportformgroup.value.startdate);
    const endDate = new Date(this.reportformgroup.value.enddate);
    endDate.setHours(23, 59, 59, 999);


    this.db.datewisereport({startdate: startDate, enddate: endDate}).then((data: any) => {
      this.reportdetails = data;
      console.log(data)
    })
  }
}  

