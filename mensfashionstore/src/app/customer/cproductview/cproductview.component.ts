import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';


@Component({
  selector: 'app-cproductview',
  templateUrl: './cproductview.component.html',
  styleUrls: ['./cproductview.component.scss']
})
export class CproductviewComponent {

  category_id: any;
  brand_id: any;

  public branddata:any[]=[];
  public productdata:any[]=[];
  public filteredProductData: any[] = [];
  productviewform!:FormGroup;
  


  
  

  constructor(private fb: FormBuilder, private router :Router, private route: ActivatedRoute, private dbservice: DbserviceService) {
    route.paramMap.subscribe((params: ParamMap) => {
    this.category_id = params.get('id')
    })
  }



    ngOnInit(): void 
   {
    this.productviewform=this.fb.group({
      brand_id:[''],
      category_id:[''],

      
    
      })
    
    const id=this.category_id;
    this.dbservice.getproductbycategory({id}).then((data: any) => {
      this.productdata = data;
      this.filteredProductData = data;
      console.log(data)
    });
    this.dbservice.brandview().then((data:any)=>{
      this.branddata=data;
      console.log(data);
  })
   }
  onChange() 
  {
    const categoryid=this.category_id;

    const brandid=this.productviewform.value.brand_id;
    
  
  
    console.log(categoryid,brandid)
  
    this.dbservice.getcategoryandbrandbyid({category_id: categoryid, brand_id: brandid }) 
     .then((data:any) =>{
    this.productdata = data;
    this.filteredProductData = data;
    console.log(this.productdata)
    });
    }
    
  
  
      
  }


  

