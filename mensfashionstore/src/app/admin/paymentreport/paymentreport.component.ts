import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as XLSX from 'xlsx';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-paymentreport',
  templateUrl: './paymentreport.component.html',
  styleUrls: ['./paymentreport.component.scss']
})
export class PaymentreportComponent implements OnInit{
  @ViewChild('TABLE', { static: false }) TABLE!: ElementRef;
  title = 'Excel';
  ExportTOExcel() {
    const ws: XLSX.WorkSheet = 
    XLSX.utils.table_to_sheet(this.TABLE.nativeElement);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, 'productdetails.xlsx');
    }
  public Registrationdata:any[]=[];
  constructor(private dbservice:DbserviceService) {}
  successmsg:any;
  ngOnInit(): void {
  this.productviewdata();
  }
  productviewdata(){
  this.dbservice.paymentreport().then((data:any)=>{this.Registrationdata=data;}
  );
}
  
}

