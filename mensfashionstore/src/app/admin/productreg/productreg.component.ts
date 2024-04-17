import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-productreg',
  templateUrl: './productreg.component.html',
  styleUrls: ['./productreg.component.scss']
})
export class ProductregComponent {

  selectedFiles?: FileList;
  currentFile?: any;
  fileInfos?:  Observable<any>;
  message = '';


  public categorydata:any[]=[];
  public branddata:any[]=[];
  dbservice: any;

  constructor(private fb:FormBuilder,private router:Router,private db:DbserviceService) { }

  productregform=this.fb.group({
    category_id:[''], 
    brand_id:[''],
    product_name:[''],
    product_size:[''],
    product_colour:[''],
    product_image:[''],
    product_price:['']


})
ngOnInit(): void { 
this.db.categoryview().then((data:any)=>{
this.categorydata=data;
})
this.db.brandview().then((data:any)=>{
  this.branddata=data;
})
}

selectFile(event: any): void {
  this.selectedFiles= event.target.files;
  }

  Onsubmit()
{
  if (this.selectedFiles) {
    console.log(this.selectedFiles);
    const file: File | null = this.selectedFiles.item(0);
    if (file) {
    this.currentFile = file;
    this.db.upload(this.currentFile).subscribe(
    (event: any) => {
    this.message = event.body.message; }) ;
    }







  console.log(this.productregform.value)
  this.productregform.value.product_image=this.currentFile.name;
    this.db.productreg(this.productregform.value)
    .then((confirmation:any)=>
    {console.log(confirmation);
      if(confirmation.message == "success"){
        alert('Product Registration Compleated Successfully')
        this.router.navigate(['/adminmaster/productview'])
        }})
        console.log(this.productregform.value)
         }
        }    
}
