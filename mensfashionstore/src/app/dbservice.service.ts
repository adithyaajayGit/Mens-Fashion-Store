import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DbserviceService {

  constructor(private http:HttpClient) { }
  login(data:any){
    return this.http.post("http://localhost:3000/login",data).toPromise()
    }
  districtreg(data:any){
    return this.http.post("http://localhost:3000/districtreg",data).toPromise()
  }
  districtview()
{
  return this.http.get("http://localhost:3000/districtview").toPromise() 
 
}
  locationreg(data:any)
{
  return this.http.post("http://localhost:3000/locationreg",data).toPromise() 
}



upload(file: File): Observable<HttpEvent<any>> {
  const formData: FormData = new FormData();
  formData.append('file', file);
  const req = new HttpRequest('POST', `http://localhost:3000/upload`, 
  formData, {
  reportProgress: true,
  responseType: 'json'
  });
  return this.http.request(req);
  }

  brandreg(data:any)
{
return this.http.post("http://localhost:3000/brandreg",data).toPromise()
}

categoryreg(data:any)
{
return this.http.post("http://localhost:3000/categoryreg",data).toPromise()
}

categoryview()
{
  return this.http.get("http://localhost:3000/categoryview").toPromise() 
 
}
brandview()
{
  return this.http.get("http://localhost:3000/brandview").toPromise() 
 
}
productreg(data:any)
{
return this.http.post("http://localhost:3000/productreg",data).toPromise()
}
getdistrictbyid(data:any)
{
return this.http.post("http://localhost:3000/getdistrict",data).toPromise()
}
locationview()
{
  return this.http.get("http://localhost:3000/locationview").toPromise() 
 
}
getcategoryandbrandbyid(data:any)
{
return this.http.post("http://localhost:3000/getcategoryandbrandbyid",data).toPromise()
}
productview()
{
  return this.http.get("http://localhost:3000/productview").toPromise() 
 
}

Deletedistrictdata(data:any){
  return this.http.post("http://localhost:3000/districtdelete",data).toPromise() 
}

Deletelocationdata(data:any){
  return this.http.post("http://localhost:3000/locationdelete",data).toPromise() 
}
Deletebranddata(data:any){
  return this.http.post("http://localhost:3000/branddelete",data).toPromise() 
}
Deletecategorydata(data:any){
  return this.http.post("http://localhost:3000/categorydelete",data).toPromise() 
}
Deleteproductdata(data:any){
  return this.http.post("http://localhost:3000/productdelete",data).toPromise() 
}
getlocationdetails(data:any){
  return this.http.post("http://localhost:3000/getlocationdetails",data).toPromise() 
}
locationedit(data:any){
  return this.http.post("http://localhost:3000/locationedit",data).toPromise() 
}
getbrandbyid(data:any){
  return this.http.post("http://localhost:3000/getbrandbyid", data).toPromise();
  }
  updatebranddata(data:any){
  return this.http.post("http://localhost:3000/updatebranddata",data).toPromise();
  }
  getcategorydetails(data:any){
    return this.http.post("http://localhost:3000/getcategorydetails",data).toPromise() 
  }
  categoryedit(data:any){
    return this.http.post("http://localhost:3000/categoryedit",data).toPromise() 
  }
  getdistrictdetails(data:any){
    return this.http.post("http://localhost:3000/getdistrictdetails",data).toPromise() 
  }
  districtedit(data:any){
    return this.http.post("http://localhost:3000/districtedit",data).toPromise() 
  }
  getproductdetails(data:any){
    return this.http.post<any>("http://localhost:3000/getproductdetails",data).toPromise() 
  }
  productedit(data:any){
    return this.http.post("http://localhost:3000/productedit",data).toPromise() 
  }
  locationviews(data:any){
    return this.http.post("http://localhost:3000/locationviews",data).toPromise() 
  }

customerreg(data:any){
  return this.http.post("http://localhost:3000/customerreg",data).toPromise() 
}

getproductbycategory(data:any){
  return this.http.post("http://localhost:3000/getproductbycategory",data).toPromise() 
}
getproductbybrand(data:any){
  return this.http.post("http://localhost:3000/getproductbybrand",data).toPromise() 
}
cartaddproduct(data:any){
  return this.http.post("http://localhost:3000/cartaddproduct",data).toPromise() 
}
cartview(data:any)
{
  return this.http.post("http://localhost:3000/cartview",data).toPromise() 
 
}
carttotal(data:any)
{
  return this.http.post<any>("http://localhost:3000/carttotal",data).toPromise() 
 
}
cartcheckout(data:any){
  return this.http.post("http://localhost:3000/cartcheckout",data).toPromise() 
}
// updateTotalAmount(data:any){
//   return this.http.post("http://localhost:3000/updateTotalAmount",data).toPromise() 
// }
delivery(data:any){
  return this.http.post("http://localhost:3000/delivery",data).toPromise() 
}
masterview()
{
  return this.http.get("http://localhost:3000/masterview").toPromise() 
 
}
payment(data:any){
  return this.http.post("http://localhost:3000/payment",data).toPromise() 
}
customerview(data:any)
{
  return this.http.post("http://localhost:3000/customerview",data).toPromise() 
 
}
datewisereport(data:any){
  return this.http.post("http://localhost:3000/datewisereport",data).toPromise()
  }
  
  stockadd(data:any)
  {
  return this.http.post("http://localhost:3000/stockadd",data).toPromise()
  }
  categorypie()
  {
    return this.http.get("http://localhost:3000/categorypie").toPromise() 
   
  }
  brandchart()
  {
    return this.http.get("http://localhost:3000/brandchart").toPromise() 
   
  }
  productreport()
  {
    return this.http.get("http://localhost:3000/productreport").toPromise() 
   
  }
  paymentreport()
  {
    return this.http.get("http://localhost:3000/paymentreport").toPromise() 
   
  }
  forgot(data:any)
  {
  return this.http.post("http://localhost:3000/forgot",data).toPromise()
  }
  userview(data:any)
  {
    return this.http.post("http://localhost:3000/userview",data).toPromise() 
   
  }
  getcustomerdetails(data:any){
    return this.http.post<any>("http://localhost:3000/getcustomerdetails",data).toPromise() 
  }
  profileedit(data:any){
    return this.http.post("http://localhost:3000/profileedit",data).toPromise() 
  }
  userchangepassword(data:any){
    return this.http.post("http://localhost:3000/userchangepassword",data).toPromise() 
  }
  categorybook()
{
  return this.http.get("http://localhost:3000/categorybook").toPromise() 
 
}
brandbook()
{
  return this.http.get("http://localhost:3000/brandbook").toPromise() 
 
}
productbook()
{
  return this.http.get("http://localhost:3000/productbook").toPromise() 
 
}
recenttrans()
{
  return this.http.get("http://localhost:3000/recenttrans").toPromise() 
 
}
monthbook()
{
  return this.http.get("http://localhost:3000/monthbook").toPromise() 
 
}
productdelete(data:any){
  return this.http.post("http://localhost:3000/productdeletea",data).toPromise() 
}
orderview(data:any)
{
  return this.http.post("http://localhost:3000/orderview",data).toPromise() 
 
}









}
