import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminmasterComponent } from './admin/adminmaster/adminmaster.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { GuestmasterComponent } from './guest/guestmaster/guestmaster.component';
import { GuesthomeComponent } from './guest/guesthome/guesthome.component';
import { GuestloginComponent } from './guest/guestlogin/guestlogin.component';
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
import { CustomermasterComponent } from './customer/customermaster/customermaster.component';
import { CustomerhomeComponent } from './customer/customerhome/customerhome.component';
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

const routes: Routes = [{path:'',redirectTo:'guestmaster/guesthome',pathMatch:'full'},

{path:'adminmaster',component:AdminmasterComponent,
children:[{path:'adminhome',component:AdminhomeComponent},
{path:'districtreg',component:DistrictregComponent},
{path:'locationreg',component:LocationregComponent},
{path:'brandreg',component:BrandregComponent},
{path:'categoryreg',component:CategoryregComponent},
{path:'productreg',component:ProductregComponent},
{path:'districtview',component:DistrictviewComponent},
{path:'locationview',component:LocationviewComponent},
{path:'categoryview',component:CategoryviewComponent},
{path:'brandview',component:BrandviewComponent},
{path:'productview',component:ProductviewComponent},
{path:'editlocation/:id',component:EditlocationComponent},
{path:'editbrand/:id',component:EditbrandComponent},
{path:'editcategory/:id',component:EditcategoryComponent},
{path:'editdistrict/:id',component:EditdistrictComponent},
{path:'editproduct/:id',component:EditproductComponent},
{path:'categorypiechart',component:PiechartreportComponent},
{path:'datewisereport',component:DatewisereportComponent},
{path:'stockadd/:id',component:StockaddComponent},
{path:'barchartreport',component:BarchartreportComponent},
{path:'excelreport',component:ExcelreportComponent},
{path:'paymentreport',component:PaymentreportComponent}]},

{path:'guestmaster',component:GuestmasterComponent,
children:[{path:'guesthome',component:GuesthomeComponent},
{path:'guestlogin',component:GuestloginComponent},
{path:'customerreg',component:CustomerregComponent},
{path:'forgotpassword',component:ForgotpasswordComponent}]},


{path:'customermaster',component:CustomermasterComponent,
children:[{path:'customerhome',component:CustomerhomeComponent},
{path:'categoryview',component:CcategoryviewComponent},
{path:'productview/:id',component:CproductviewComponent},
{path:'productviewmore/:id',component:CproductviewmoreComponent},
{path:'cartview',component:CartviewComponent},
{path:'delivery',component:CdeliveryComponent},
{path:'payment',component:CpaymentComponent},
{path:'profileview',component:ProfileviewComponent},
{path:'editprofile/:id',component:EditprofileComponent},
{path:'changepassword',component:ChangepasswordComponent},
{path:'aboutus',component:AboutusComponent},
{path:'myorders',component:MyordersComponent}
]}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
