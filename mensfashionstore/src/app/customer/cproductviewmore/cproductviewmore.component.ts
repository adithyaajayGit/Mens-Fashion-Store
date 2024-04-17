import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { DbserviceService } from '../../dbservice.service';

@Component({
  selector: 'app-cproductviewmore',
  templateUrl: './cproductviewmore.component.html',
  styleUrls: ['./cproductviewmore.component.scss']
})
export class CproductviewmoreComponent {
  loginid: any;
  product_id: any;
  public productdata: any[] = [];
  total_amount: any;
  productviewmoreform!: FormGroup;
  quantity!: any;


  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private dbservice: DbserviceService) {
    route.paramMap.subscribe((params: ParamMap) => {
      this.product_id = params.get('id')
    })
  }

  ngOnInit(): void {

    this.productviewmoreform = this.fb.group({
      product_id: this.product_id,
      price: [''],
      quantity: [''],
      total_amount: [''],
      // stock: [''],
      loginid:this.loginid =localStorage.getItem('loginid'),


    })

    const id = this.product_id;
    this.dbservice.getproductdetails({ id }).then((data: any) => {
      this.productdata = data;
      console.log(data)
      this.productviewmoreform.setValue({
        product_id: data[0].product_id,
        price: data[0].price,
        quantity: 1,
        total_amount: 0,
        loginid:data[0].login_id,
        // stock: data[0].stock,

       
      });
    })
  }


  onchange() {
    console.log("hi")
    const quantity = this.productviewmoreform.value.quantity;
    console.log(quantity)
    if (quantity > this.productdata[0].stock) {
      // If entered quantity exceeds stock, set it to stock quantity
      this.productviewmoreform.get("quantity")?.setValue(this.productdata[0].stock);
      // Recalculate total amount
      this.total_amount = this.productdata[0].stock * this.productdata[0].price;
    } else {
      this.total_amount = quantity * this.productdata[0].price;
    }
    console.log(this.total_amount)
    this.productviewmoreform.get("total_amount")?.setValue(this.total_amount)
  }
  
  Onsubmit(){
    console.log(this.productviewmoreform.value)
    this.dbservice.cartaddproduct(this.productviewmoreform.value).then((confirmation:  any) => {
    if (confirmation.message == "success") {
    alert('item added to cart')
    this.router.navigate(['/customermaster/cartview'])
    window.location.reload()

    }
    else {
    alert('eror inserting data')
    }
    })

}

}
