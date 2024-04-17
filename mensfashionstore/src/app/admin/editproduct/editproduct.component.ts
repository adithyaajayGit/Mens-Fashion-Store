import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.scss']
})
export class EditproductComponent {

  product_id: any; // Correct the property name to 'ategoryId'
  public productArray: any;
  public categorydataarray:any;
  public branddataarray:any;
  selectedFiles?: FileList;
  currentFile?: any;
  message = '';
  db: any;


  producteditform!: FormGroup;
  constructor(private fb: FormBuilder, private router :Router, private route: ActivatedRoute, private dbservice: DbserviceService) {
  route.paramMap.subscribe((params: ParamMap) => {
  this.product_id = params.get('id')
  })
  // this.route.paramMap.subscribe((params: ParamMap) => {
  // this.CourseId = params.get('id'); // Use 'CourseId' here
  // });
  }
  //page load

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
    console.log(this.selectedFiles);
    this.imageupload();
    }




  ngOnInit(): void {

  this.producteditform = this.fb.group({
    category_id: [''],
    brand_id: [''],
    product_id: ['this.product_id'], 
    product_name: [''],
    product_size: [''],
    product_colour: [''],
    product_image: [''],
    price:['']

  })
      
  this.dbservice.categoryview().then((data:any)=>{
    this.categorydataarray=data;
  this.dbservice.brandview().then((data:any)=>{
      this.branddataarray=data;
  
  })







  })
  const id = this.product_id;
  console.log(id);
  this.dbservice.getproductdetails({id}).then((data: any) => { 
    this.productArray = data;
    console.log(this.productArray);
    this.producteditform.setValue({

      product_id: data[0].product_id, 
      category_id: data[0].category_id,
      brand_id: data[0].brand_id,
      product_name: data[0].product_name,
      product_size: data[0].product_size,
      product_colour: data[0].product_colour,
      price:data[0].price,
      product_image: data[0].product_image,
      
    });
    });
  }




  onSubmit(){
    if (!this.producteditform.value.product_image) {
      const data = {
      product_name: this.producteditform.value.product_name,
      product_size: this.producteditform.value.product_size,
      product_colour: this.producteditform.value.product_colour,
      price: this.producteditform.value.product_price,
      product_image:this.productArray[0].product_image, 

      }
      this.dbservice.productedit(data).then((confirmation: any) => {
      alert('Brand Details Updated Successfully');
      // this.router.navigate(['/Adminmaster /categoryview])
      })
      }
      else {
      this.dbservice.productedit(this.producteditform.value).then((confirmation:any) => {
      alert('Product Details Updated Successfully');
      this.router.navigate(['/adminmaster/productview'])
      })
      }
      }
    
   
    imageupload() {
      if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);
      if (file) {
      this.currentFile = file;
      console.log(this.currentFile)
      this.dbservice.upload(this.currentFile).subscribe(
      (event: any) => {
      this.message = event.body.message;
      });
      }
      this.producteditform.value.product_image = this.currentFile.name;
      console.log(this.producteditform.value);
      }
      }
    //End of Submit
  
}













