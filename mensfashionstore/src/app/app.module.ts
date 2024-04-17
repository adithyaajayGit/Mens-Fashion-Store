import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminmasterComponent } from './admin/adminmaster/adminmaster.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { GuestmasterComponent } from './guest/guestmaster/guestmaster.component';
import { GuesthomeComponent } from './guest/guesthome/guesthome.component';
import { CustomermasterComponent } from './customer/customermaster/customermaster.component';
import { CustomerhomeComponent } from './customer/customerhome/customerhome.component';
import { GuestloginComponent } from './guest/guestlogin/guestlogin.component';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DistrictregComponent } from './admin/districtreg/districtreg.component';
import { LocationregComponent } from './admin/locationreg/locationreg.component';
import { BrandregComponent } from './admin/brandreg/brandreg.component';
import { CategoryregComponent } from './admin/categoryreg/categoryreg.component';
import { ProductregComponent } from './admin/productreg/productreg.component';
import { DistrictviewComponent } from './admin/districtview/districtview.component';
import { LocationviewComponent } from './admin/locationview/locationview.component';
import { CategoryviewComponent } from './admin/categoryview/categoryview.component';
import { BrandviewComponent } from './admin/brandview/brandview.component';
import { ProductviewComponent } from './admin/productview/productview.component';
import { EditlocationComponent } from './admin/editlocation/editlocation.component';
import { EditbrandComponent } from './admin/editbrand/editbrand.component';
import { EditcategoryComponent } from './admin/editcategory/editcategory.component';
import { EditdistrictComponent } from './admin/editdistrict/editdistrict.component';
import { EditproductComponent } from './admin/editproduct/editproduct.component';
import { CustomerregComponent } from './guest/customerreg/customerreg.component';
import { CproductviewComponent } from './customer/cproductview/cproductview.component';
import { CcategoryviewComponent } from './customer/ccategoryview/ccategoryview.component';
import { CproductviewmoreComponent } from './customer/cproductviewmore/cproductviewmore.component';
import { CartviewComponent } from './customer/cartview/cartview.component';
import { CdeliveryComponent } from './customer/cdelivery/cdelivery.component';
import { CpaymentComponent } from './customer/cpayment/cpayment.component';
import { PiechartreportComponent } from './admin/piechartreport/piechartreport.component';
import { DatewisereportComponent } from './admin/datewisereport/datewisereport.component';
import { StockaddComponent } from './admin/stockadd/stockadd.component';
import { BarchartreportComponent } from './admin/barchartreport/barchartreport.component';
import { ExcelreportComponent } from './admin/excelreport/excelreport.component';
import { PaymentreportComponent } from './admin/paymentreport/paymentreport.component';
import { ForgotpasswordComponent } from './guest/forgotpassword/forgotpassword.component';
import { ProfileviewComponent } from './customer/profileview/profileview.component';
import { EditprofileComponent } from './customer/editprofile/editprofile.component';
import { ChangepasswordComponent } from './customer/changepassword/changepassword.component';
import { AboutusComponent } from './customer/aboutus/aboutus.component';
import { MyordersComponent } from './customer/myorders/myorders.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminmasterComponent,
    AdminhomeComponent,
    GuestmasterComponent,
    GuesthomeComponent,
    CustomermasterComponent,
    CustomerhomeComponent,
    GuestloginComponent,
    DistrictregComponent,
    LocationregComponent,
    BrandregComponent,
    CategoryregComponent,
    ProductregComponent,
    DistrictviewComponent,
    LocationviewComponent,
    CategoryviewComponent,
    BrandviewComponent,
    ProductviewComponent,
    EditlocationComponent,
    EditbrandComponent,
    EditcategoryComponent,
    EditdistrictComponent,
    EditproductComponent,
    CustomerregComponent,
    CproductviewComponent,
    CcategoryviewComponent,
    CproductviewmoreComponent,
    CartviewComponent,
    CdeliveryComponent,
    CpaymentComponent,
    PiechartreportComponent,
    DatewisereportComponent,
    StockaddComponent,
    BarchartreportComponent,
    ExcelreportComponent,
    PaymentreportComponent,
    ForgotpasswordComponent,
    ProfileviewComponent,
    EditprofileComponent,
    ChangepasswordComponent,
    AboutusComponent,
    MyordersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
