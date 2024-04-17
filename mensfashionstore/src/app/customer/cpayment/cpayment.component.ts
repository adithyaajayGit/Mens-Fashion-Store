import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-cpayment',
  templateUrl: './cpayment.component.html',
  styleUrls: ['./cpayment.component.scss']
})
export class CpaymentComponent {

  master_id: any; 
  public total_amount:any;
  paymentform!: FormGroup;
  login_id:any;
  public customerdata: any[]=[];
  validationstatus=null;


  
  constructor(private fb:FormBuilder,private db:DbserviceService,private router:Router) { }


  ngOnInit(): void {
  //   this.db.customerview().then((data:any)=>{
  //     this.customerdata=data;
  // })
    this.total_amount = localStorage.getItem('total_amount');
    this.master_id = localStorage.getItem('master_id');
    // this.customer_name = localStorage.getItem('customer_name');
    this.login_id = localStorage.getItem('loginid');
    const id=this.login_id
   console.log(this.login_id)
      this.db.customerview({id}).then((data:any)=>{
            this.customerdata=data;
            console.log(data)
            this.paymentform.patchValue({
              customer_name:data[0].customer_name,
            });
        })
        
    


    console.log('Master ID:', this.master_id);
    this.paymentform = this.fb.group({
      master_id: [this.master_id],
      total_amount: [this.total_amount],
      // personName: [localStorage.getItem('customer_name') || ''],
      customer_name:['',[Validators.required,]],
      customer_cardno:['',[Validators.required,]],
      customer_expiry:['',[Validators.required,]],
      customer_cv:['',[Validators.required,]],


      
      login_id: [this.login_id],

    });
    
  }

  

  Onsubmit(){
    {
      if(this.paymentform.invalid){
        this.validationstatus ="";
        alert('Please Enter details')
        this.router.navigate(['/customermaster/payment']);
    
        return
      } 
    else{
      this.validationstatus =null;
      console.log(this.paymentform.value);
      
    }






    console.log(this.paymentform.value)
    this.db.payment(this.paymentform.value).then((confirmation:  any) => {
    if (confirmation.message == "success") {
    alert('Payment Succesful')
    this.router.navigate(['/customermaster/customerhome'])
    }
    else {
    alert('Payment not successful')
    }
    })

}
  }
}
