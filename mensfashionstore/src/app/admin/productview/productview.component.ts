import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-productview',
  templateUrl: './productview.component.html',
  styleUrls: ['./productview.component.scss']
})
export class ProductviewComponent {

  public categorydata:any[]=[];
  public branddata:any[]=[];
  public productdata:any[]=[];

  productviewform!:FormGroup;
  constructor(private fb:FormBuilder,private db:DbserviceService,private router:Router) { }
  
  
  ngOnInit(): void {
  this.productviewform=this.fb.group({
  category_id:[''],
  brand_id:[''],

  })
  this.db.categoryview().then((data:any)=>{
  this.categorydata=data;
  // console.log(data);
  });
  this.db.brandview().then((data:any)=>{
    this.branddata=data;
    // console.log(data);
    });
  // this.db.locationview().then((data:any)=>{this. locationdata=data;
  // console.log(data)
  // })
  }
  onChange() {
  const categoryid=this.productviewform.value.category_id;
  const brandid=this.productviewform.value.brand_id;


  console.log(categoryid,brandid)

  this.db.getcategoryandbrandbyid({ category_id: categoryid, brand_id: brandid }) 
   .then((data:any) =>{
  this.productdata = data;
  console.log(this.productdata)
  });
  }
  
  Deleteproductdata(product_id: string) {
    // Show a confirmation dialog to the user
    if (confirm("Are you sure you want to delete this product?")) {
      // If the user confirms, proceed with deletion
      this.db.productdelete({ product_id }).then((confirmation: any) => {
        if (confirmation.message === "Success") {
          alert('Successfully Deleted');
          // Optionally, you can reload the district data after successful deletion
          // this.db.districtdata();
        }
      });
      window.location.reload()
    } else {
      // If the user cancels, do not delete the data
      alert('Deletion Canceled');
    }
  }
}
