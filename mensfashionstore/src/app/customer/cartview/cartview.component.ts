import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ParamMap, Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-cartview',
  templateUrl: './cartview.component.html',
  styleUrls: ['./cartview.component.scss']
})
export class CartviewComponent {
  loginid: any;
  login_id: any;
  public cartdata:any[]=[];
  public carttotal:any[]=[];
  total_amount: any;
  cartviewform!: FormGroup;
  master_id:any;

  
  
  constructor(private fb:FormBuilder,private db:DbserviceService,private router:Router) { }


  ngOnInit(): void 
   {

    this.loginid =localStorage.getItem('loginid')
    this.cartviewform = this.fb.group({
      total_amount: [''],
      login_id:localStorage.getItem('loginid')
  


    })


    const loginid=this.loginid;
    this.db.cartview({loginid:this.loginid}).then((data:any)=>{
      this.cartdata=data;

  })
  // const id=this.loginid
  this.db.carttotal({loginid:this.loginid}).then((data:any)=>{
  this.carttotal=data;
  this.total_amount=data[0].total_amount;
  localStorage.setItem("total_amount",this.total_amount)
  this.cartviewform.patchValue({ total_amount: this.total_amount });
  console.log(this.total_amount)

  })
  // localStorage.setItem("master_id",this.master_id)

  };
  Onsubmit()
  {
    console.log(this.cartviewform.value)
    this.db.cartcheckout(this.cartviewform.value).then((confirmation:any)=>{ 
      if(confirmation.message == "success")
      { 
        this.master_id = confirmation.master_id;
        localStorage.setItem("master_id", this.master_id);
        alert(' proceed to checkout') 
        this.router.navigate(['/customermaster/delivery'])
     } 
     else 
     { 
      alert('Data do not insert,please check')
    }
    }
  )}
  
  canProceedToCheckout(): boolean {
    // Check if cartdata exists and is not empty
    if (this.cartdata && this.cartdata.length > 0) {
      // Check if every item in the cart has a quantity less than or equal to its stock
      return this.cartdata.every((item) => item.quantity <= item.stock);
    } else {
      // If cartdata is empty or undefined, user cannot proceed to checkout
      return false;
    }
  }
  Deleteproductdata(product_id: string) {
    if (confirm("Are you sure you want to remove this item from cart?")) {
      this.db.Deleteproductdata({ product_id }).then((confirmation: any) => {
        if (confirmation.message === "Success") {
          alert('Product removed from cart');
        }
      });
      window.location.reload()
    } else {
      alert('Deletion Canceled');
    }
  }
}
