import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-stockadd',
  templateUrl: './stockadd.component.html',
  styleUrls: ['./stockadd.component.scss']
})
export class StockaddComponent {
  product_id: any; 

  public productArray: any;
  stockeditform!: FormGroup;

  
  constructor(private fb: FormBuilder, private router :Router, private route: ActivatedRoute, private dbservice: DbserviceService) {
  route.paramMap.subscribe((params: ParamMap) => {
  this.product_id = params.get('id')
  })

  
  // this.route.paramMap.subscribe((params: ParamMap) => {
  // this.CourseId = params.get('id'); // Use 'CourseId' here
  // });
  }
  //page load
  ngOnInit(): void {
  this.stockeditform = this.fb.group({
  product_id: [''],
  product_name: [''],
  current_stock: [''],
  newstock: [''],

  })
  const id = this.product_id;
  console.log(id);
  this.dbservice.getproductdetails({id}).then((data: any) => { 
    this.productArray = data;
    console.log(this.productArray);
    this.stockeditform.setValue({

      product_id: data[0].product_id, 
    product_name: data[0].product_name,
    current_stock: data[0].stock,
    newstock:""

    });
    });
  }
  



    Onsubmit()
    {
    this.dbservice.stockadd(this.stockeditform.value)
    .then((confirmation: any) => {
    if (confirmation.message === "success") 
    {
    alert('Stock Updated')
    this.router.navigate(['/adminmaster/productview'])
    }})



}

}
